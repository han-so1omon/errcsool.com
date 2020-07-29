import { red } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7b53ca',
    },
    secondary: {
      main: '#ffebf1',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ffd6e2',
    },
    text: {
        primary: '#000000',
        secondary: '#262626',
    }
  },
});

export default responsiveFontSizes(theme);
