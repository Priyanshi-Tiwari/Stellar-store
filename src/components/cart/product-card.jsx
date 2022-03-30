import React from 'react';
import './product-card.css'
import Header from "../../assets/camera.jpg"
import { FaHeart } from "react-icons/fa";

const ProductCard = () => {
  return (
      <>
        <div className="card-wrapper flex-col">
          <div className="center">
            <div className="image-conatiner">
              <img
                className="card-image"
                src={Header}
                alt="card-image"
              />
            </div>
             <div class="flex-row space-between">
            
            <div className="card-header-one">Camera</div>
            <div class="rating-comp flex-row display-flex-center">
            <span class="star-icon">4
            <FaHeart/>
            </span> 
            </div>
            </div>

            <div className="card-price flex-row space-between">
              <div className="new">Rs 1000</div>
              <div className="discounted">Rs5000</div>
            </div>
            <div class="cart-quantity">
            <span class="quantity-header">Quantity:</span>
            <button class="quant-btn">+</button>
            <input class="quant-input" />
            <button class="quant-btn">-</button>
            </div>
            <div class="card-buttons flex-col gap-sm">
            <a href="#" class="links primary-link stack">Add to cart</a>
            <a href="#" class="links links-secondary stack">Wishlist</a>
          </div>
          </div>
        </div>
        </>
  )
}

export {ProductCard}