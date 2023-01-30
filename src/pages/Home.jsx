import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Typography,
  Stack,
} from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import ProductList from '../components/ProductList';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CasinoIcon from '@mui/icons-material/Casino';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';
import AuthContext from '../utils/authContext';
import AddProductForm from '../components/AddProductForm';
import { getAll } from '../utils/api';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import BasicSelect from '../components/BasicSelect';
import ClearIcon from '@mui/icons-material/Clear';

function Home(props) {
  const { addToOrder } = props;
  const [products, setProducts] = useState([]);
  const [filterNames, setFilterNames] = useState('');
  const [filterName, setFilterName] = useState('');
  const [isRandomProductModalOpened, setIsRandomProductModalOpened] =
    useState(false);
  const [isAddModalOpened, setIsAddModalOpened] = useState(false);

  const randomProduct = products[Math.floor(Math.random() * products.length)];

  const { user } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const allProducts = await getAll('products');
      setProducts(allProducts);
    })();
  }, []);

  useEffect(() => {
    const names = products.map((product) => {
      return product.name;
    });
    setFilterNames(names);
  }, [products]);

  const sortByName = () => {
    setProducts((products) =>
      [...products].sort((a, b) => a.name.localeCompare(b.name))
    );
  };
  const sortByAscending = () => {
    setProducts((products) => [...products].sort((a, b) => a.price - b.price));
  };
  const sortByDescending = () => {
    setProducts((products) => [...products].sort((a, b) => b.price - a.price));
  };

  const clearSelect = () => {
    setProducts(products);
    setFilterName('');
  };

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
            <AddProductForm
              setIsAddModalOpened={setIsAddModalOpened}
              products={products}
              setProducts={setProducts}
              setFilters={setFilterNames}
            />
          </Box>
        </Modal>
      )}

      <Box sx={{ marginLeft: '24px' }}>
        <Button
          size="large"
          startIcon={<CasinoIcon />}
          onClick={() => setIsRandomProductModalOpened(true)}
        >
          Maybe, I want to buy...
        </Button>
      </Box>
      {isRandomProductModalOpened && (
        <Modal onClose={() => setIsRandomProductModalOpened(false)}>
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
              onClick={() => setIsRandomProductModalOpened(false)}
              ml="24px"
            >
              NO,THANKS
            </Button>
          </Box>
        </Modal>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '16px 24px ',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <BasicSelect
            filterNames={filterNames}
            filterName={filterName}
            setFilterName={setFilterName}
          />
          <Button onClick={clearSelect}>
            <ClearIcon color="error" />
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={sortByName}>
              <SortByAlphaIcon />
            </Button>
            <Button onClick={sortByAscending}>
              <ArrowUpwardIcon />
            </Button>
            <Button onClick={sortByDescending}>
              <ArrowDownwardIcon />
            </Button>
          </ButtonGroup>
        </Box>
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
        <ProductList
          filterName={filterName}
          products={products}
          addToOrder={addToOrder}
        />
      </Stack>
    </Container>
  );
}
export default Home;
