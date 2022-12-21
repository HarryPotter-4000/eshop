import * as React from 'react';
import {
  Box,
  Button,
  Container,
  Card,
  Typography,
  Divider,
  Stack,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import portalgun from '../assets/image/portalgun.jpg';
import cake from '../assets/image/cake.png';
import cube from '../assets/image/cube.png';
import ShoppingItem from '../components/ShoppingItem';

const PRODUCTS = [
  {
    id: 1,
    name: 'Portal gun',
    description: 'The Aperture Science Handheld Portal Device.',
    price: 800,
    image: portalgun,
    count: 2,
    priceTotal: 1600,
    // other fields
  },
  {
    id: 2,
    name: 'Cake',
    description: 'The cake is a lie',
    price: 25,
    image: cake,
    count: 1,
    priceTotal: 25,
    // other fields
  },
  {
    id: 3,
    name: 'Cube',
    description: 'The Weighted Companion Cube.',
    price: 1000,
    image: cube,
    count: 1,
    priceTotal: 1000,
    // other fields
  },
];

function Cart() {
  const [cart, setCart] = useState(PRODUCTS);
  const [total, setTotal] = useState({
    price: cart.reduce((previous, current) => previous + current.priceTotal, 0),
    count: cart.reduce((previous, current) => previous + current.count, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce(
        (previous, current) => previous + current.priceTotal,
        0
      ),
      count: cart.reduce((previous, current) => previous + current.count, 0),
    });
  }, [cart]);

  const deleteProduct = (id) => {
    setCart((cart) => cart.filter((product) => id !== product.id));
  };

  const increaseCount = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
            priceTotal: product.price * product.count,
          };
        }
        return product;
      });
    });
  };
  const decreaseCount = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: --product.count,
            priceTotal: product.price * product.count,
          };
        }
        return product;
      });
    });
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          width: {
            lg: '1000px',
            md: '800px',
            sm: '500px',
            xs: '300px',
          },
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }}
      >
        <Box
          sx={{
            p: '24px',
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: '#393E46' }}>
            Shopping Cart
          </Typography>
          <Divider />
          <Box
            m={0}
            sx={{
              alignSelfh: {
                sm: 'center',
                xs: 'flex-start',
              },
            }}
          >
            {cart.map((product) => {
              return (
                <ShoppingItem
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  count={product.count}
                  priceTotal={product.priceTotal}
                  key={product.id}
                  deleteProduct={deleteProduct}
                  increaseCount={increaseCount}
                  decreaseCount={decreaseCount}
                />
              );
            })}
          </Box>
        </Box>
        <Stack
          sx={{
            p: '24px',
            backgroundColor: '#90CAF9',
            alignItems: {
              sm: 'flex-end',
              xs: 'center',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                sm: 'row',
                xs: 'column',
              },
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',

                marginBottom: '16px',
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: '#393E46',
                  fontWeight: '400',
                  paddingRight: '16px',
                  marginBottom: '0px',
                  textAlign: 'right',
                }}
              >
                Total ({total.count} item):
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: '#393E46',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                ${total.price}
              </Typography>
            </Box>
          </Box>
          <Button component={Link} to={'/order'} variant="contained">
            GO TO CHECKOUT
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
export default Cart;
