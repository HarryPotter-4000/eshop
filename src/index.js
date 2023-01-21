import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
