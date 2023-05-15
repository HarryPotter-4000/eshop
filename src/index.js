import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SnackbarProvider } from './utils/snackContext';
import '../src/utils/firebase';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff8f00',
      contrastText: '#fff',
    },
    secondary: {
      main: '#90CAF9',
      contrastText: '#393E46',
    },
    text: {
      main: '#393E46',
    },
    textLight: {
      main: '#fff',
    },
    price: {
      main: '#E91E63',
    },
    bgBlue: {
      main: '#90CAF9',
      contrastText: '#fff',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
          color: '#393E46',
          fieldset: {
            borderColor: '#90CAF9',
            borderWidth: '2px',
          },
          '& .MuiOutlinedInput-root:hover': {
            '& > fieldset': {
              borderColor: '#ff8f00',
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: '#393E46',
          fieldset: {
            borderColor: '#90CAF9',
            borderWidth: '2px',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff8f00',
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
