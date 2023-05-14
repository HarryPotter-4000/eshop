import './App.css';
import { useState, useContext } from 'react';
import { Routes, Route } from 'react-router';
import { Container } from '@mui/material';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import OrderPage from './pages/OrderPage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './utils/authContext';
import PrivateRoute from './components/PrivateRoute';
import SnackbarContent from './utils/snackContext';
import AdminPage from './pages/AdminPage';
import ForbiddenPage from './pages/ForbiddenPage';

function App() {
  const [order, setOrder] = useState([]);

  const { setSnack } = useContext(SnackbarContent);

  const addToOrder = (orderItem) => {
    const found = order.find((obj) => {
      return obj.id === orderItem.id;
    });
    if (found) {
      let count = found.count + orderItem.counter;
      setOrder(
        order.map((item) =>
          item.id !== orderItem.id ? item : { ...item, count }
        )
      );
      setSnack({
        message: 'You added the same item',
        severity: 'warning',
        open: true,
        autoHideDuration: 2000,
        position: { vertical: 'bottom', horizontal: 'left' },
      });
    } else {
      setOrder([
        ...order,
        {
          ...orderItem,
          count: orderItem.counter,
        },
      ]);
      setSnack({
        message: 'You added an item to your shopping cart',
        severity: 'success',
        open: true,
        autoHideDuration: 2000,
        position: { vertical: 'bottom', horizontal: 'left' },
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

  return (
    <Container maxWidth="lg">
      <AuthProvider>
        <Header orderLen={order.length} />
        <Routes>
          <Route path="/" element={<Home addToOrder={addToOrder} />} />
          <Route
            path="/product/:id"
            element={
              <ProductPage
                addToOrder={addToOrder}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
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
          <Route path="/forbidden" element={<ForbiddenPage />} />
        </Routes>
      </AuthProvider>
    </Container>
  );
}

export default App;
