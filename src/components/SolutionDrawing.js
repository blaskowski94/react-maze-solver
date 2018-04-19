import React from 'react'
import Paper from 'material-ui/Paper'
import {split, map} from 'lodash'
import {withStyles} from 'material-ui/styles/index'

class SolutionDrawing extends React.Component {

    generateMaze = (mazeSolution) => {
        let mazeAry = split(mazeSolution, '\n')
        let dataKey = 1000000
        return (
            <table className={this.props.classes.padding} cellSpacing='0'>
                <tbody>
                {map(mazeAry, (row, key) => {
                    return (<tr key={key}>{map(row, (char) => {
                        if (char === '.')
                            return <td className={this.props.classes.open} key={dataKey++}/>
                        else if (char === '#')
                            return <td className={this.props.classes.edge} key={dataKey++}/>
                        else if (char === 'A')
                            return <td className={this.props.classes.start} key={dataKey++}/>
                        else if (char === 'B')
                            return <td className={this.props.classes.end} key={dataKey++}/>
                        else if (char === '@')
                            return <td className={this.props.classes.path} key={dataKey++}/>
                        else
                            return <td className={this.props.classes.unknown} key={dataKey++}/>
                    })}</tr>)
                })}
                </tbody>
            </table>
        )
    }

    render() {
        const {mazeSolution} = this.props
        let maze = this.generateMaze(mazeSolution)
        return (
            <Paper elevation={8} square>
                {maze}
            </Paper>
        )
    }
}

const styles = () => ({
    padding: {
        padding: 20
    },
    edge: {
        height: '10px',
        width: '10px',
        backgroundColor: 'black'
    },
    path: {
        height: '10px',
        width: '10px',
        backgroundColor: 'blue'
    },
    start: {
        height: '10px',
        width: '10px',
        backgroundColor: 'green'
    },
    end: {
        height: '10px',
        width: '10px',
        backgroundColor: 'red'
    },
    unknown: {
        height: '10px',
        width: '10px',
        backgroundColor: 'yellow'
    },
    open: {
        height: '10px',
        width: '10px',
        backgroundColor: 'white'
    }
})

export default withStyles(styles)(SolutionDrawing)