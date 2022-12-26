import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { Container } from '@mui/material';
import { PRODUCTS } from './fakedata/fakeData';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import OrderPage from './pages/OrderPage';
import Header from './components/Header';
import { createContext } from 'react';

const OrderContext = createContext(null);

function App() {
  const [order, setOrder] = useState([]);

  const addToOrder = (orderItem) => {
    let count = 1;

    const found = order.find((obj) => {
      return obj.id === orderItem.id;
    });

    if (found) {
      count = found.count + 1;

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
    } else {
      setOrder([
        ...order,
        {
          id: orderItem.id,
          name: orderItem.name,
          price: orderItem.price,
          image: orderItem.image,
          count,
        },
      ]);
    }
  };
  const addToOrderfromProductPage = (orderItem) => {
    setOrder([
      ...order,
      {
        id: orderItem.id,
        name: orderItem.name,
        price: orderItem.price,
        image: orderItem.image,
        count: orderItem.count,
      },
    ]);
  };

  const removeFromOrder = (orderItem) => {
    setOrder(order.filter((item) => item.id !== orderItem));
  };

  const increaseCount = (id) => {
    setOrder((order) => {
      return order.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
    });
  };

  const decreaseCount = (id) => {
    setOrder((order) => {
      return order.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return item;
      });
    });
  };

  return (
    <Container maxWidth="lg">
      <Header orderLen={order.length} />
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
              addtoOrder={addToOrderfromProductPage}
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
