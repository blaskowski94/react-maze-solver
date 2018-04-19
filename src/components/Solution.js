import React from 'react'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {withStyles} from 'material-ui/styles'
import SolutionDrawing from './SolutionDrawing'

class Solution extends React.Component {

    render() {
        const {classes, solutionLength, solveTime, mazeSolution} = this.props
        const time = solveTime === 0 ? 'Maze solved too quickly to measure time' : 'Maze solved in ' + solveTime + ' ms'
        return (
            <React.Fragment>
                <Grid container justify='center'>
                    <Typography variant='subheading' align='center' paragraph>
                        {time}
                    </Typography>
                </Grid>
                <Grid container justify='center'>
                    <Typography variant='subheading' align='center' paragraph>
                        Path length: {solutionLength}
                    </Typography>
                </Grid>
                <Grid container justify='center'>
                    <Grid item className={classes.maxWidth}>
                        <SolutionDrawing mazeSolution={mazeSolution}/>
                    </Grid>
                    <Grid container justify='center' className={classes.paddingB}>
                        <Grid item>
                            <Button variant='raised' color='secondary' onClick={this.props.handleBack}>Back</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

const styles = () => ({
    paddingB: {
        paddingBottom: 16
    },
    maxWidth: {
        maxWidth: '100%',
        paddingBottom: 16
    }
})

export default withStyles(styles)(Solution)