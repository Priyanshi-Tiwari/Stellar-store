import React from 'react'
import { FaHeart } from "react-icons/fa";
import { useDebugValue } from 'react/cjs/react.development';
import { removeItemFromCartHandler } from '../../backend/controllers/CartController';
import { useCart } from '../../contexts/cart-context';
import { useWishlist } from '../../contexts/wishlist-context';


const Wishlist = ({item}) => {
  
  const{wishlist,setWishlist}=useWishlist();
  const {cart,setCart}=useCart();

  function removeHandler(item){
    setWishlist(wishlist.filter((data)=>data._id!==item._id))
  }

  function addCartHandler(item){
    const updatedCart=cart.map(value=>value._id===item._id?{...value,quantity:value.quantity+1}:{...value})
    setCart([...updatedCart]);
    setWishlist(wishlist.filter((data)=>data._id!==item._id))

  }
  
  return (
    <>
    <div className="card-wrapper flex-col">
      <div className="center">
        <div className="image-conatiner">
          <img
            className="card-image"
            src={item.img}
            alt="card-image"
          />
        </div>
         <div class="flex-row space-between">
        
        <div className="card-header-one">{item.name}</div>
        <div class="rating-comp flex-row display-flex-center">
        <span class="star-icon">{item.rating}
        <FaHeart/>
        </span> 
        </div>
        </div>

        <div className="card-price flex-row space-between">
          <div className="new">Rs {item.discountedPrice}</div>
          <div className="discounted">Rs{item.price}</div>
        </div>
        <div class="card-buttons flex-col gap-sm">
        <button class="links primary-link stack" onClick={()=>addCartHandler(item)}>Add to cart</button>
        <button onClick={()=>removeHandler(item)} class="links links-secondary stack">Remove from wishlist</button>
      </div>
      </div>
    </div>
    
    </>
    
  )
}

export  {Wishlist}