import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Box, Button, Card, Container, Typography } from '@mui/material';

const ModalWindow = ({ message, isOpen, onClose, products }) => {
  if (!isOpen) return null;

  var randomProduct = products[Math.floor(Math.random() * products.length)];
  console.log(randomProduct);

  return ReactDOM.createPortal(
    <Container
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, .7)',
      }}
    >
      <Card
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: {
            sm: '240px',
            xs: '280px',
          },
          minHeight: '160px',
          background: '#fff',
          padding: '16px',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography pb={2} variant="h5">
          {message}
        </Typography>
        <img alt={randomProduct.name} width="220px" src={randomProduct.image} />
        <Box mt="16px">
          <Button
            component={Link}
            to={`/product/${randomProduct.id}`}
            variant="text"
            color="primary"
          >
            Interesting!
          </Button>
          <Button
            component={'div'}
            variant="outlined"
            color="error"
            onClick={onClose}
            ml="24px"
          >
            NO,THANKS
          </Button>
        </Box>
      </Card>
    </Container>,
    document.getElementById('root')
  );
};

export default ModalWindow;
