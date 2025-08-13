import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#96ea63',
      light: '#b3f085',
      dark: '#7bc94a',
      contrastText: '#1e2f14'
    },
    secondary: {
      main: '#a6a7ad',
      light: '#d3d3d6',
      dark: '#7a7b85',
      contrastText: '#ffffff'
    },
    background: {
      default: '#07070a',
      paper: '#0d0e14'
    },
    text: {
      primary: '#ffffff',
      secondary: '#a6a7ad',
      disabled: '#7a7b85'
    },
    grey: {
      50: '#ffffff',
      100: '#d3d3d6',
      200: '#a6a7ad',
      300: '#7a7b85',
      400: '#4d4f5c',
      500: '#212429',
      600: '#1a1c29',
      700: '#0d0e14',
      800: '#07070a',
      900: '#000000'
    },
    divider: '#212429'
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
    h1: {
      fontFamily: 'Blanc Groove, serif',
      fontSize: '85.32px',
      fontWeight: 900,
      lineHeight: '85.32px',
      color: '#ffffff'
    },
    h2: {
      fontFamily: 'Manrope, sans-serif',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: '48px',
      color: '#ffffff'
    },
    h3: {
      fontFamily: 'Manrope, sans-serif',
      fontSize: '30px',
      fontWeight: 900,
      color: '#ffffff'
    },
    h4: {
      fontFamily: 'Manrope, sans-serif',
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '22.40px',
      color: '#ffffff'
    },
    h5: {
      fontFamily: 'Blanc Groove, serif',
      fontSize: '14px',
      fontWeight: 700,
      color: '#ffffff'
    },
    h6: {
      fontFamily: 'Manrope, sans-serif',
      fontSize: '16px',
      fontWeight: 600,
      color: '#ffffff'
    },
    body1: {
      fontFamily: 'DM Sans, sans-serif',
      fontSize: '18px',
      fontWeight: 400,
      color: '#a4a7ae'
    },
    body2: {
      fontFamily: 'Manrope, sans-serif',
      fontSize: '15px',
      fontWeight: 400,
      color: '#a6a7ad'
    },
    subtitle1: {
      fontFamily: 'Manrope, sans-serif',
      fontSize: '21px',
      fontWeight: 400,
      color: '#d3d3d6'
    },
    subtitle2: {
      fontFamily: 'Urbanist, sans-serif',
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '16px',
      color: '#d3d3d6'
    },
    button: {
      fontFamily: 'Manrope, sans-serif',
      fontSize: '16px',
      fontWeight: 400,
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(25.8px)',
          border: '0.5px solid rgba(255, 255, 255, 0.1)'
        }
      }
    }
  }
});

export default theme;