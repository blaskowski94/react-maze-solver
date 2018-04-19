import React from 'react'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import mazes from '../resources/Mazes'
import {withStyles} from 'material-ui/styles'
import Instructions from './Instructions'

class MazeInput extends React.Component {

    state = {}

    btnClick = btnNum => {
        let mazeNum = 'maze' + btnNum
        this.setState({mazeIn: mazes[mazeNum]})
    }

    inputClear = () => {
        this.setState({mazeIn: ''})
    }

    onInputChange = event => {
        this.setState({mazeIn: event.target.value})
    }

    render() {
        const {classes} = this.props
        let {mazeIn} = this.state
        return (
            <React.Fragment>
                <Instructions/>
                <Grid container justify='center' className={classes.paddingB}>
                    <Grid item xs={11}>
                        <Paper elevation={8} square className={classes.padding}>
                            <Input
                                value={mazeIn}
                                onChange={this.onInputChange}
                                autoFocus
                                disableUnderline
                                multiline
                                fullWidth
                                rows={1}
                                rowsMax={45}
                                placeholder='Enter maze here...'
                                classes={{
                                    input: classes.center
                                }}
                            />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container justify='center' spacing={16} className={classes.paddingB}>
                    <Grid item>
                        <Button variant='raised' onClick={() => this.btnClick(1)}>Maze 1</Button>
                    </Grid>
                    <Grid item>
                        <Button variant='raised' onClick={() => this.btnClick(2)}>Maze 2</Button>
                    </Grid>
                    <Grid item>
                        <Button variant='raised' onClick={() => this.btnClick(3)}>Maze 3</Button>
                    </Grid>
                </Grid>
                <Grid container justify='center' spacing={16} className={classes.paddingB}>
                    <Grid item>
                        <Button variant='raised' color='primary' disabled={!mazeIn} onClick={() => this.props.handleSolve(mazeIn)}>Solve</Button>
                    </Grid>
                    <Grid item>
                        <Button variant='raised' color='secondary' onClick={this.inputClear}>Clear</Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

const styles = () => ({
    center: {
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize: '0.9rem'
    },
    paddingB: {
        paddingBottom: 16
    },
    padding: {
        padding: 16
    }
})

export default withStyles(styles)(MazeInput)