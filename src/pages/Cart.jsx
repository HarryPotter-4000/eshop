import * as React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
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
import OrderItem from '../components/OrderItem';
import AuthContext from '../utils/authContext';

function Cart({ order, removeFromOrder, increaseCount, decreaseCount }) {
  const [total, setTotal] = useState({
    price: order.reduce(
      (previous, current) => previous + current.price * current.count,
      0
    ),
    count: order.reduce((previous, current) => previous + current.count, 0),
  });
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setTotal({
      price: order.reduce(
        (previous, current) => previous + current.price * current.count,
        0
      ),
      count: order.reduce((previous, current) => previous + current.count, 0),
    });
  }, [order]);

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {!order.length ? (
        <Typography variant="h4" gutterBottom sx={{ color: '#393E46' }}>
          Shopping Cart is empty
        </Typography>
      ) : (
        <Card
          sx={{
            width: {
              md: '700px',
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
              {order.map((product) => (
                <OrderItem
                  {...product}
                  key={product.id}
                  removeFromOrder={removeFromOrder.bind(null, product.id)}
                  increaseCount={increaseCount.bind(null, product.id)}
                  decreaseCount={decreaseCount.bind(null, product.id)}
                />
              ))}
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
      )}
    </Container>
  );
}
export default Cart;
