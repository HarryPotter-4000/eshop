import { useState, useEffect, useContext } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AddProductForm from '../components/AddProductForm';
import { deleteProduct, getAll } from '../utils/api';
import Modal from '../components/Modal';
import Item from '../components/Item';
import SnackbarContext from '../utils/snackContext';
import Spinner from '../components/Spinner';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpened, setIsAddModalOpened] = useState(false);
  const { setSnack } = useContext(SnackbarContext);

  useEffect(() => {
    (async () => {
      const allProducts = await getAll('products');
      if (allProducts?.length > 0) {
        allProducts.sort((a, b) => a.name.localeCompare(b.name));
        setProducts(allProducts);
      }
    })();
  }, []);

  const removeProduct = async (id) => {
    await deleteProduct(id);
    setSnack({
      message: 'You successfully removed product',
      severity: 'success',
      open: true,
      autoHideDuration: 2000,
      position: { vertical: 'top', horizontal: 'center' },
    });
    const allProducts = await getAll('products');
    allProducts.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(allProducts);
  };

  return (
    <Container width="lg" style={{ padding: '0px' }}>
      <Box sx={{ marginLeft: '24px' }}>
        <Button
          sx={{ padding: '16px 0px 0px' }}
          size="large"
          color="price"
          startIcon={<AddBusinessIcon />}
          onClick={() => setIsAddModalOpened(true)}
        >
          Add new product
        </Button>
      </Box>
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
            />
          </Box>
        </Modal>
      )}
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <Item
                {...product}
                key={product.id}
                removeProduct={removeProduct.bind(null, product.id)}
              />
            );
          })
        ) : (
          <Spinner />
        )}
      </Stack>
    </Container>
  );
};
export default AdminPage;
