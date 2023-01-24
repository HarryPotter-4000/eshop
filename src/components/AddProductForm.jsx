import * as React from 'react';
import { TextField, Box, Button } from '@mui/material';
import { useState, useContext } from 'react';
import { postProducts } from '../utils/api';
import SnackbarContext from '../utils/snackContext';

export default function AddProductForm({ setIsAddModalOpened }) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    image: '',
    count: 0,
    price: 0,
    priceTotal: 0,
  });

  const { setSnack } = useContext(SnackbarContext);

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleSubmit = (product) => {
    postProducts(product);
    console.log(product);
    setIsAddModalOpened(false);
    setSnack({
      message: 'You added new product',
      severity: 'success',
      open: true,
      autoHideDuration: 2000,
    });
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
        onChange={handleChange}
        value={product.name}
      />
      <TextField
        variant="outlined"
        fullWidth
        name="description"
        label="Description"
        type="text"
        autoComplete="description"
        onChange={handleChange}
        value={product.description}
      />
      <TextField
        variant="outlined"
        fullWidth
        name="image"
        label="Address of image"
        type="text"
        autoComplete="image"
        onChange={handleChange}
        value={product.image}
      />
      <TextField
        variant="outlined"
        fullWidth
        name="count"
        label="Count"
        type="number"
        autoComplete="count"
        onChange={handleChange}
        value={product.count}
      />
      <TextField
        variant="outlined"
        fullWidth
        name="price"
        label="Price"
        type="number"
        autoComplete="price"
        onChange={handleChange}
        value={product.price}
      />
      <TextField
        variant="outlined"
        fullWidth
        name="priceTotal"
        label="Price Total"
        type="number"
        autoComplete="priceTotal"
        onChange={handleChange}
        value={product.priceTotal}
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
          disabled={
            !product.name ||
            !product.description ||
            !product.image ||
            !product.count ||
            !product.price ||
            !product.priceTotal
          }
          variant="contained"
          sx={{
            backgroundColor: '#82CD47',
            '&:hover': {
              backgroundColor: '#459506',
            },
          }}
          onClick={() => handleSubmit(product)}
        >
          Add product
        </Button>
      </Box>
    </Box>
  );
}
