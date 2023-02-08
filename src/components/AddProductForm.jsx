import { TextField, Box, Button } from '@mui/material';
import { useContext, useRef } from 'react';
import { postProducts } from '../utils/api';
import SnackbarContext from '../utils/snackContext';
import { getAll } from '../utils/api';

const AddProductForm = ({ setIsAddModalOpened, setProducts }) => {
  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const imageRef = useRef('');
  const countRef = useRef(0);
  const priceRef = useRef(0);
  const priceTotalRef = useRef(0);

  const { setSnack } = useContext(SnackbarContext);

  const handleSubmit = async () => {
    const newProduct = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      image: imageRef.current.value,
      count: countRef.current.value,
      price: priceRef.current.value,
      priceTotal: priceTotalRef.current.value,
    };
    await postProducts(newProduct);
    setIsAddModalOpened(false);
    setSnack({
      message: 'You added new product',
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
    <Box
      component="form"
      sx={{
        mt: 1,
        width: {
          xs: '240px',
          sm: '280px',
          md: '450px',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TextField
        variant="outlined"
        fullWidth
        name="name"
        label="Name"
        type="text"
        autoComplete="name"
        inputRef={nameRef}
      />
      <TextField
        variant="outlined"
        fullWidth
        name="description"
        label="Description"
        type="text"
        autoComplete="description"
        inputRef={descriptionRef}
      />
      <TextField
        variant="outlined"
        fullWidth
        name="image"
        label="Address of image"
        type="text"
        autoComplete="image"
        inputRef={imageRef}
      />
      <TextField
        variant="outlined"
        fullWidth
        name="count"
        label="Count"
        type="number"
        autoComplete="count"
        defaultValue={0}
        inputRef={countRef}
      />
      <TextField
        variant="outlined"
        fullWidth
        name="price"
        label="Price"
        type="number"
        autoComplete="price"
        defaultValue={0}
        inputRef={priceRef}
      />
      <TextField
        variant="outlined"
        fullWidth
        name="priceTotal"
        label="Price Total"
        type="number"
        autoComplete="priceTotal"
        defaultValue={0}
        inputRef={priceTotalRef}
      />
      <Box
        sx={{
          mt: 1,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button
          sx={{ mr: 4 }}
          variant="text"
          color="error"
          onClick={() => setIsAddModalOpened(false)}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#82CD47',
            '&:hover': {
              backgroundColor: '#459506',
            },
          }}
          onClick={handleSubmit}
        >
          Add product
        </Button>
      </Box>
    </Box>
  );
};
export default AddProductForm;
