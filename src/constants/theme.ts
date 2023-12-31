import { Theme as MaterialUITheme, createTheme } from '@mui/material/styles'

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
  textDisabled: '#023876',
  info: '#c2c6ca',
}

export const theme: MaterialUITheme = createTheme({
  palette: {
    background: {
      default: colors.background,
      paper: colors.background,
    },
    text: {
      primary: colors.primary,
      secondary: colors.textSecondary,
      disabled: colors.textDisabled,
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
      main: colors.info,
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
        input: {
          fontSize: '1.25rem',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          '&:before': { borderBottom: `1px solid ${colors.secondary}` },
          '&:after': { borderBottom: `1px solid ${colors.secondary}` },
        },
        option: {
          '&[class*="MuiAutocomplete-option"]': {
            padding: '2px 0',
          },
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
