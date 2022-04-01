import React from 'react'
import './card.css'
import Header from "../../assets/camera.jpg"
import { FaHeart } from "react-icons/fa";

const Card = ({product}) => {
  return (
    <>
        <div className="card-wrapper flex-col">
          <div className="center">
            <div className="image-conatiner">
              <img
                className="card-image"
                src={product.img}
                alt="card-image"
              />
            </div>
             <div class="flex-row space-between">
            
            <div className="card-header-one">{product.name}</div>
<div class="rating-comp flex-row display-flex-center">
            <span class="star-icon">{product.rating}
            <FaHeart/>
            </span> 
            </div>
            </div>

            <div className="card-price flex-row space-between">
              <div className="new">Rs {product.discountedPrice}</div>
              <div className="discounted">{product.price}</div>
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

export  {Card}