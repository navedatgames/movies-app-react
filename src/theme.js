import { createTheme } from '@mui/material/styles';
import { purple ,blue,
 } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});

export default theme;