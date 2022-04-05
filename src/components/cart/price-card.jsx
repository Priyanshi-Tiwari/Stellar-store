import React from 'react';
import { useCart } from '../../contexts/cart-context';
import './price-card.css'


const PriceCard = () => {
  const{cart}=useCart();
  const totalBill = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.discountedPrice;
  }, 0);
  return (
    <div class="card-wrapper checkout-wrapper flex-col">
        <h2 class="wishlist-header">Price Details</h2>
        <hr class="checkout-gap" />
        <div class="justify-content-sb dis-flex">
          <p class="check-out-text">Price({cart.length} item)</p>
          <p class="check-out-text">
         Rs{cart.reduce((acc, curr) => {
         return acc + curr.quantity * curr.price;
         }, 0)}
          </p>
        </div>
        <div class="justify-content-sb dis-flex">
          <p class="check-out-text">Discount</p>
          <p class="check-out-text">
          Rs{cart.reduce((acc, curr) => {
          return acc + curr.quantity *( curr.price-curr.discountedPrice);
          }, 0)}
          </p>
        </div>
        <div class="justify-content-sb dis-flex">
          <p class="check-out-text">Delivery Charges</p>
          <p class="check-out-text">free</p>
        </div>
        <hr class="checkout-gap" />
        <div class="justify-content-sb dis-flex">
          <p class="check-out-text"><strong>Total amount</strong></p>
          <p class="check-out-text"><strong>Rs {totalBill}</strong></p>
        </div>
        <div class="card-buttons flex-col gap-sm">
          <a href="#" class="links primary-link stack">Place Order</a>
        </div>
        </div>
  )
}

export {PriceCard}