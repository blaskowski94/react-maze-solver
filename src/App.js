import React from 'react'
import Home from './components/Home'
import CssBaseline from 'material-ui/CssBaseline'
import {MuiThemeProvider} from 'material-ui/styles'
import theme from './theme'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline>
                    <MuiThemeProvider theme={theme}>
                        <Home/>
                    </MuiThemeProvider>
                </CssBaseline>
            </React.Fragment>
        )
    }
}

export default App
