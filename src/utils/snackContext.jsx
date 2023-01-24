import React, { useState, createContext } from 'react';
import { Alert, Snackbar } from '@mui/material';

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snack, setSnack] = useState({
    open: false,
    severity: 'success',
    message: '',
    autoHideDuration: 0,
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnack({
      open: false,
    });
  };

  return (
    <SnackbarContext.Provider value={{ setSnack }}>
      <Snackbar
        open={snack.open}
        autoHideDuration={snack.autoHideDuration}
        onClose={handleClose}
      >
        <Alert severity={snack.severity}>{snack.message}</Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
