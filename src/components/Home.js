import React from 'react'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import {withStyles} from 'material-ui/styles'
import Solution from './Solution'
import axios from 'axios'
import MazeInput from './MazeInput'

class Home extends React.Component {

    state = {}

    handleBack = () => {
        this.setState({showSolution: false})
    }

    async handleSolve(mazeText) {
        let maze = {
            maze: mazeText
        }
        try {
            const response = await axios.post('http://localhost:8080/solve', maze)
            this.setState({
                showSolution: true,
                solutionLength: response.data.pathLength,
                solveTime: response.data.solveTime,
                mazeSolution: response.data.mazeSolved
            })
        }
        catch (error) {
            console.log(error.response)
            alert(error.response.data)
        }
    }

    render() {
        const {classes} = this.props
        const {showSolution, solutionLength, solveTime, mazeSolution} = this.state
        const display = showSolution ?
            <Solution handleBack={this.handleBack} solveTime={solveTime} solutionLength={solutionLength}
                      mazeSolution={mazeSolution}/> :
            <MazeInput handleSolve={this.handleSolve.bind(this)}/>

        return (
            <React.Fragment>
                <Grid container className={classes.padding}>
                    <Grid item xs={12}>
                        <Typography variant='display3' align='center'>Maze Solver</Typography>
                    </Grid>
                    {display}
                    <Grid container justify='center'>
                        <Grid item>
                            <Typography>Bob Laskowski 2018</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

const styles = () => ({
    center: {
        textAlign: 'center'
    },
    paddingB: {
        paddingBottom: 16
    },
    padding: {
        padding: 16
    }
})

export default withStyles(styles)(Home)