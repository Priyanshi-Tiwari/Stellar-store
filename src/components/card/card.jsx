import React from 'react'
import './card.css'
import Header from "../../assets/camera.jpg"
import { FaHeart } from "react-icons/fa";
import { useWishlist } from '../../contexts/wishlist-context';
import {Link} from 'react-router-dom';
import { useCart } from '../../contexts/cart-context';
import { useNavigate } from 'react-router-dom';

const Card = ({product}) => {

const {wishlist,setWishlist}=useWishlist();
const {cart,setCart}=useCart();
const cartNavigate=useNavigate();

function wishlistHandler(product){
 if(wishlist.find(item => item._id === product._id)){
   setWishlist(wishlist.filter(item=> item._id === product._id))
 }
 else{
   setWishlist([...wishlist,product])
 }
}

function cartHandler(product){
  if(cart.find(item=>item._id===product._id)){
    cartNavigate('/cart-page')
  }
  else{
    setCart([...cart,product])
  }

}
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
              <div className="discounted">Rs{product.price}</div>
            </div>
            <div class="card-buttons flex-col gap-sm">
            <button class="links primary-link stack" onClick={()=>cartHandler(product)}>
              {cart.find(item=>item._id===product._id)?"Go to cart":"Add to cart"}
            </button>
            <button class="links links-secondary stack"
            onClick={()=>wishlistHandler(product)}>{wishlist.find(item => item._id === product._id)?"Remove from wishlist":"Add to wishlist"}</button>
          </div>
          </div>
        </div>
        </>
  )
}

export  {Card}