import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: '#008080', 
      contrastText: '#fff',
    },
    secondary: {
      main: '#FFC107', 
      contrastText: '#fff',
    },
    text: {
      primary: '#333',
      secondary: '#666', 
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff', 
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '1rem',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '1rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '1rem',
    },
    body1: {
      fontSize: '1rem',
      color: '#333',
    },
    body2: {
      fontSize: '0.8rem',
      color: '#666',
    }
   
  },
});

export default theme;
