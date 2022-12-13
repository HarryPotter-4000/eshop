import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import OrderPage from "./pages/OrderPage";
import Header from "./components/Header";
import { Container } from "@mui/system";

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Container>
  );
}

export default App;
