import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ShoppingCart from './pages/ShoppingCart';
import Header from './components/Header'

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/eshop/" element={ <HomePage title='Home'/> } />
      <Route path="/productpage/" element={ <ProductPage title='ProductPage'/> } />
      <Route path="/shoppingcart/" element={ <ShoppingCart title='ShoppingCart' /> } />
      </Routes>
    </Router>
  );
}

export default App;
