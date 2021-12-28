import { createTheme } from '@mui/material/styles';
import {blue,brown
 } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: brown[500],
    },
  },
});

export default theme;