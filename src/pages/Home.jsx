import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Pagination,
  Typography,
  Stack,
} from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ClearIcon from '@mui/icons-material/Clear';
import Modal from '../components/Modal';
import { getAll } from '../utils/api';
import useNavigateParams from '../utils/useNavigateParams';
import BasicSelect from '../components/BasicSelect';
import ProductList from '../components/ProductList';
import Spinner from '../components/Spinner';

const Home = (props) => {
  const { addToOrder } = props;
  const [products, setProducts] = useState([]);
  const [filterNames, setFilterNames] = useState('');
  const [filterName, setFilterName] = useState('');
  const [isRandomProductModalOpened, setIsRandomProductModalOpened] =
    useState(false);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) || 1
  );
  const randomProduct = products[Math.floor(Math.random() * products.length)];

  const location = useLocation();

  useEffect(() => {
    (async () => {
      const allProducts = await getAll('products');
      setProducts(allProducts);
    })();
  }, []);

  useEffect(() => {
    setFilterNames(products.map((product) => product.name).sort());
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

  const filteredProducts = products.filter((product) => {
    if (filterName) {
      return product.name === filterName;
    } else {
      return products;
    }
  });
  const clearSelect = () => {
    setProducts(products);
    setFilterName('');
    navigate('/');
  };

  const pageNumbers = [];
  const PER_PAGE = 4;
  const PRODUCTS_COUNT = filteredProducts.length;
  for (let i = 1; i <= Math.ceil(PRODUCTS_COUNT / PER_PAGE); i++) {
    pageNumbers.push(i);
  }
  const indexOfLastProduct = currentPage * PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PER_PAGE;
  const currentProduct = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const navigate = useNavigateParams();
  const handleChange = (event, value) => {
    setCurrentPage(value);
    navigate('/', { page: value });
  };
  useEffect(() => {
    setCurrentPage(Number(searchParams.get('page')) || 1);
  }, [location]);

  return (
    <Container width="lg" style={{ padding: '0px' }}>
      <Box sx={{ marginLeft: '24px' }}>
        <Button
          sx={{ padding: '16px 0px' }}
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
          flexDirection: {
            sm: 'row',
            xs: 'column',
          },
          justifyContent: {
            sm: 'space-between',
            xs: 'center',
          },
          alignItems: {
            sm: 'center',
            xs: 'flex-start',
          },
          margin: '16px 24px ',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginBottom: {
              sm: '0px',
              xs: '16px',
            },
          }}
        >
          <BasicSelect
            filterNames={filterNames}
            filterName={filterName}
            setFilterName={setFilterName}
          />
          <Button disabled={!filterName} onClick={clearSelect}>
            <ClearIcon color={filterName ? 'error' : 'grey'} />
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
          display: 'flex',
          flexDirection: {
            sm: 'row',
            xs: 'column',
          },
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'space-around',
          margin: '0 auto',
        }}
      >
        {!filterName &&
          (PRODUCTS_COUNT ? (
            <Stack
              spacing={2}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '0 auto',
              }}
            >
              <Pagination
                count={pageNumbers.length}
                page={currentPage}
                onChange={handleChange}
              />
            </Stack>
          ) : (
            <Spinner />
          ))}
        <ProductList
          filterName={filterName}
          products={filterName ? filteredProducts : currentProduct}
          addToOrder={addToOrder}
        />
      </Stack>
    </Container>
  );
};
export default Home;
