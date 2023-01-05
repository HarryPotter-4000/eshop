import { Box, Button, Container, Stack } from '@mui/material';
import { useState } from 'react';
import ProductList from '../components/ProductList';
import ModalWindow from '../components/ModalWindow';
import CasinoIcon from '@mui/icons-material/Casino';

function Home(props) {
  const { products, addToOrder } = props;
  const [openp, setOpenP] = useState(false);

  return (
    <Container width="lg" style={{ padding: '0px' }}>
      <Box sx={{ marginLeft: '24px' }}>
        <Button
          size="large"
          startIcon={<CasinoIcon />}
          onClick={() => setOpenP(true)}
        >
          Maby, I want to buy...
        </Button>
        <ModalWindow
          message="Here you go!"
          isOpen={openp}
          onClose={() => setOpenP(false)}
          products={products}
        />
      </Box>
      <Stack
        sx={{
          width: {
            lg: '1200px',
            md: '900px',
            sm: '600px',
            xs: '300px',
          },
          display: 'flex',
          flexDirection: {
            sm: 'row',
            xs: 'column',
          },
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'space-around',
          margin: '0 auto',
        }}
      >
        <ProductList products={products} addToOrder={addToOrder} />
      </Stack>
    </Container>
  );
}
export default Home;
