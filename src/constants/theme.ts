import {
  Theme as MaterialUITheme,
  ThemeOptions,
  createTheme,
} from '@mui/material/styles'

declare module '@emotion/react' {
  export interface Theme extends MaterialUITheme {}
}

const colors = {
  primary: '#91b7cc',
  secondary: '#277dbd',
  success: '#01ff40',
  background: '#142534',
  text: '#91b7cc',
  textSecondary: '#3793b1',
  adornment: '#c2c6ca',
}

export const theme: ThemeOptions = createTheme({
  palette: {
    background: {
      default: colors.background,
      paper: colors.background,
    },
    text: {
      primary: colors.primary,
      secondary: colors.textSecondary,
    },
    primary: {
      main: colors.primary,
      contrastText: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    success: {
      main: colors.success,
    },
    info: {
      main: colors.adornment,
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: `1px solid ${colors.secondary}`,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          '&:before': { borderBottom: `1px solid ${colors.secondary}` },
          '&:after': { borderBottom: `1px solid ${colors.secondary}` },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
})
