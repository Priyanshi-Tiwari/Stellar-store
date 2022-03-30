import './App.css';
import logo from './logo.png';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landing-page/landing-page';
import { Cart } from './pages/cart-page/cart-page';
import { ProductListing } from './pages/product-listing/product-listing';
import { WishlistPage } from './pages/wishlist/wishlist-page';
import { Login } from './pages/auth/login/login';
import { SignUp } from './pages/auth/signup/signup';
import { MockAPI } from './Mockman';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart-page" element={<Cart />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mock-api" element={<MockAPI />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
