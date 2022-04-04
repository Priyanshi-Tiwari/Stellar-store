import React from 'react';
import { PriceCard } from '../../components/cart/price-card';
import { ProductCard } from '../../components/cart/product-card';
import { useCart } from '../../contexts/cart-context';

const Cart = () => {
  const { cart } = useCart();
  
  return (
    <>
    <div class="cart-height">
      <h2 class="wishlist-header">My Cart</h2>
      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <div class="flex-row flex-center overflow">
          <div class="flex-column">
          {cart.map((cartItem) => {
            return (
              
                <ProductCard cartItem={cartItem} key={cartItem._id} />
              
            );
          })}
          </div>
          <PriceCard />
        </div>
      )}
      </div>
    </>
  );
};

export { Cart };
