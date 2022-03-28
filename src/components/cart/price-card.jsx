import React from 'react';
import './price-card.css'


const PriceCard = () => {
  return (
    <div class="card-wrapper checkout-wrapper flex-col">
        <h2 class="wishlist-header">Price Details</h2>
        <hr class="checkout-gap" />
        <div class="justify-content-sb dis-flex">
          <p class="check-out-text">Price(1 item)</p>
          <p class="check-out-text">Rs 5000</p>
        </div>
        <div class="justify-content-sb dis-flex">
          <p class="check-out-text">Discount</p>
          <p class="check-out-text">-Rs 4000</p>
        </div>
        <div class="justify-content-sb dis-flex">
          <p class="check-out-text">Delivery Charges</p>
          <p class="check-out-text">free</p>
        </div>
        <hr class="checkout-gap" />
        <div class="justify-content-sb dis-flex">
          <p class="check-out-text"><strong>Total amount</strong></p>
          <p class="check-out-text"><strong>Rs 1000</strong></p>
        </div>
        <div class="card-buttons flex-col gap-sm">
          <a href="#" class="links primary-link stack">Place Order</a>
        </div>
        </div>
  )
}

export {PriceCard}