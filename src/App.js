import './App.css';
import logo from './logo.png';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landing-page/landing-page';
import { Cart } from './pages/cart-page/cart-page';
import { ProductListing } from './pages/product-listing/product-listing';
import { Wishlist } from './pages/wishlist/wishlist';
import { Login } from './pages/auth/login/login';
import { SignUp } from './pages/auth/signup/signup';
import { MockAPI } from './Mockman';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart-page" element={<Cart />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mock-api" element={<MockAPI />} />

      </Routes>
    </div>
  );
}

export default App;
