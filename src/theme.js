import {createMuiTheme} from 'material-ui/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#76d275',
            main: '#43a047',
            dark: '#00701a',
            contrastText: '#000'
        },
        secondary: {
            light: '#ff6f60',
            main: '#e53935',
            dark: '#ab000d',
            contrastText: '#000'
        }
    }
})

export default theme