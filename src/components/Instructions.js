import React from 'react'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

class Instructions extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='headline' align='center' gutterBottom>Instructions</Typography>
                    </Grid>
                    <Grid container justify='center'>
                        <Grid item xs={10}>
                            <Typography variant='subheading' align='center' paragraph>Enter a text-based maze in the box
                                below. A maze
                                consists of the
                                following 4 characters: <strong># . A B</strong>. No other characters may be present.
                                The
                                pound
                                symbol (<strong>#</strong>) represents a wall. A period (<strong>.</strong>) represents
                                an
                                open
                                path. The capital letter <strong>A</strong> is the starting point and the capital
                                letter <strong>B</strong> is the end. There should be at least one valid path from A to
                                B.
                                All
                                lines
                                of the maze must be the same length. Click one of the maze buttons below to see an
                                example.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}


export default Instructions