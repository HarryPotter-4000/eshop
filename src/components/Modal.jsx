import { createPortal } from 'react-dom';
import { Box, Container, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ children, onClose }) => {
  return createPortal(
    <Container>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, .7)',
        }}
        onClick={onClose}
      ></Box>
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: {
            xs: '240px',
            sm: '280px',
            md: '540px',
          },
          minHeight: '160px',
          borderRadius: '4px',
          background: '#fff',
          padding: '16px',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <IconButton
          sx={{
            mb: 1,
            position: 'absolute',
            top: '14px',
            right: '14px',
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          <CloseIcon sx={{ color: '#90CAF9' }} />
        </IconButton>
        <Box my={3}>{children}</Box>
      </Box>
    </Container>,
    document.getElementById('root')
  );
};

export default Modal;
