import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { Container, Snackbar, Alert } from '@mui/material';
import { PRODUCTS } from './fakedata/fakeData';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import OrderPage from './pages/OrderPage';
import Header from './components/Header';
import { createContext } from 'react';

export const SnackbarContext = createContext({});

function App() {
  const [order, setOrder] = useState([]);
  const [snack, setSnack] = useState({
    open: false,
    severity: 'success',
    message: '',
    autoHideDuration: 0,
  });

  const addToOrder = (orderItem) => {
    const found = order.find((obj) => {
      return obj.id === orderItem.id;
    });
    if (found) {
      let count = found.count + orderItem.counter;
      setOrder(
        order.map((item) => {
          if (item.id !== orderItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            count,
          };
        })
      );
      setSnack({
        message: 'You added the same item',
        severity: 'warning',
        open: true,
        autoHideDuration: 3000,
      });
    } else {
      setOrder([
        ...order,
        {
          id: orderItem.id,
          name: orderItem.name,
          price: orderItem.price,
          image: orderItem.image,
          count: orderItem.counter,
        },
      ]);
      setSnack({
        message: 'You added an item to your shopping cart',
        severity: 'success',
        open: true,
        autoHideDuration: 1000,
      });
    }
  };

  const removeFromOrder = (id) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const increaseCount = (id) => {
    setOrder((order) => {
      return order.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count + 1,
            }
          : item
      );
    });
  };

  const decreaseCount = (id) => {
    setOrder((order) => {
      return order.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count - 1,
            }
          : item
      );
    });
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnack({
      open: false,
    });
  };

  return (
    <Container maxWidth="lg">
      <Header orderLen={order.length} />
      <SnackbarContext.Provider value={{ snack, setSnack }}>
        <Snackbar
          open={snack.open}
          autoHideDuration={snack.autoHideDuration}
          onClose={handleClose}
        >
          <Alert severity={snack.severity}>{snack.message}</Alert>
        </Snackbar>
      </SnackbarContext.Provider>
      <Routes>
        <Route
          path="/"
          element={<Home products={PRODUCTS} addToOrder={addToOrder} />}
        />
        <Route
          path="/product/:id"
          element={
            <ProductPage
              products={PRODUCTS}
              addtoOrder={addToOrder}
              increaseCount={increaseCount}
              decreaseCount={decreaseCount}
            />
          }
        />
        <Route path="/order" element={<OrderPage />} />
        <Route
          path="/cart"
          element={
            <Cart
              order={order}
              removeFromOrder={removeFromOrder}
              increaseCount={increaseCount}
              decreaseCount={decreaseCount}
            />
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
