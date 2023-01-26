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
import FiltersTag from '../components/FiltersTag';

function Home(props) {
  const { addToOrder } = props;
  const [products, setProducts] = useState([]);
  const [filters, setfilters] = useState('');
  const [filter, setfilter] = useState('');
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isAddModalOpened, setIsAddModalOpened] = useState(false);
  var randomProduct = products[Math.floor(Math.random() * products.length)];

  const { user } = useContext(AuthContext);

  const [basicProducts, setBasicProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const allProducts = await getAll('products');
      setBasicProducts(allProducts);
      const names = allProducts.map((product) => {
        return product.name;
      });
      setfilters(names);
    })();
    console.log('-------------1');
  }, []);

  useEffect(() => {
    console.log('-------------2');
    setProducts(basicProducts);
  }, [basicProducts]);

  useEffect(() => {
    console.log('-------------3');
    !!filter &&
      setProducts(basicProducts.filter((product) => product.name === filter));
  }, [filter]);

  //console.log(products); //Why is the data updated 4 times in the console

  const sortByName = () => {
    setProducts([...products].sort((a, b) => a.name.localeCompare(b.name)));
  };
  const sortByAscending = () => {
    setProducts([...products].sort((a, b) => a.price - b.price));
  };
  const sortByDescending = () => {
    setProducts([...products].sort((a, b) => b.price - a.price));
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
              setBasicProducts={setBasicProducts}
              setfilters={setfilters}
            />
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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '24px',
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
      {!!filters && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            margin: '24px',
          }}
        >
          <FiltersTag filters={filters} />
        </Box>
      )}

      {/* <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Name"
              onChange={handleChange}
            >
              {selectOptions &&
                selectOptions.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box> */}
      <BasicSelect filters={filters} setfilter={setfilter} />

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
