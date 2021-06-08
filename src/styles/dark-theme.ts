import { blue, grey, red } from '@material-ui/core/colors'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let dark = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        width: 12
      },
      containedSecondary: {
        height: 50
      }
    }
  },
  props: {
    MuiLink: {
      underline: 'none',
      target: '_blank',
      color: 'inherit'
    }
  },
  palette: {
    type: 'dark',
    background: {
      default: red['A400']
    },
    primary: {
      main: grey['50']
    },
    secondary: {
      main: red['A400']
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'Open Sans', '-apple-system'].join(','),
    button: {
      fontSize: '2rem',
      fontWeight: 'bold',
      textTransform: 'none'
    }
  }
})

dark = responsiveFontSizes(dark)

export default dark
