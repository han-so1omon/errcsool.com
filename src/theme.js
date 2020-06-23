import { red } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9f82d9',
    },
    secondary: {
      main: '#262626',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff0f5',
    },
    darkBackground: {
      default: '#390862',
    },
    text: {
        primary: '#000000',
        secondary: '#767676',
    }
  },
});

export default responsiveFontSizes(theme);
