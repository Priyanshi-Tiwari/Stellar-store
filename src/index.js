import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './contexts/product-data-context';
import { FilterProvider } from './contexts/filter-context';
import { WishlistProvider } from './contexts/wishlist-context';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WishlistProvider>
        <FilterProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </FilterProvider>
      </WishlistProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
