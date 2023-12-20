import { Theme, createTheme } from '@mui/material/styles'

export const theme: Theme = createTheme({
  palette: {
    background: {
      default: '#142534',
      paper: '#142534',
    },
    text: {
      primary: '#91b7cc',
    },
    primary: {
      main: '#91b7cc',
      contrastText: '#91b7cc',
    },
    secondary: {
      main: '#277dbd',
    },
    success: {
      main: '#01ff40',
    },
  },
})
