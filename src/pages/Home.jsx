import { Box, Button, Container, Typography, Stack } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import ProductList from '../components/ProductList';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CasinoIcon from '@mui/icons-material/Casino';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';
import AuthContext from '../utils/authContext';
import AddProductForm from '../components/AddProductForm';
import { getAll } from '../utils/api';

function Home(props) {
  const { addToOrder } = props;
  const [products, setProducts] = useState([]);

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isAddModalOpened, setIsAddModalOpened] = useState(false);
  var randomProduct = products[Math.floor(Math.random() * products.length)];

  const { user } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const allProducts = await getAll('products');
      setProducts(allProducts);
    })();
  }, []);
  console.log(products); //Why is the data updated 4 times in the console

  return (
    <Container width="lg" style={{ padding: '0px' }}>
      {user && user?.email === 'admin@admin.com' && (
        <Box sx={{ marginLeft: '24px' }}>
          <Button
            size="large"
            color="price"
            startIcon={<AddBusinessIcon />}
            onClick={() => setIsAddModalOpened(true)}
          >
            Add new product
          </Button>
        </Box>
      )}
      {isAddModalOpened && (
        <Modal onClose={() => setIsAddModalOpened(false)}>
          <Typography pb={2} variant="h5" color="text.main">
            Add new product
          </Typography>
          <Box>
            <AddProductForm setIsAddModalOpened={setIsAddModalOpened} />
          </Box>
        </Modal>
      )}

      <Box sx={{ marginLeft: '24px' }}>
        <Button
          size="large"
          startIcon={<CasinoIcon />}
          onClick={() => setIsModalOpened(true)}
        >
          Maybe, I want to buy...
        </Button>
      </Box>
      {isModalOpened && (
        <Modal onClose={() => setIsModalOpened(false)}>
          <Typography pb={2} variant="h5" color="text.main">
            Here you go!
          </Typography>
          <img
            alt={randomProduct.name}
            width="220px"
            src={randomProduct.image}
          />
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
              onClick={() => setIsModalOpened(false)}
              ml="24px"
            >
              NO,THANKS
            </Button>
          </Box>
        </Modal>
      )}
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
