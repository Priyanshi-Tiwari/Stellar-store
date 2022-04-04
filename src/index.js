import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './contexts/product-data-context';
import { FilterProvider } from './contexts/filter-context';
import { WishlistProvider } from './contexts/wishlist-context';
import { CartProvider } from './contexts/cart-context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <WishlistProvider>
          <FilterProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </FilterProvider>
        </WishlistProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
