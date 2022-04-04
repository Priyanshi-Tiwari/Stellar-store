import React from 'react';
import './product-card.css'
import { useCart } from '../../contexts/cart-context';
import { FaHeart } from "react-icons/fa";
import { useWishlist } from '../../contexts/wishlist-context';

const ProductCard = ({cartItem}) => {

  const{cart,setCart}= useCart();
  const{wishlist,setWishlist}=useWishlist();
  
  function cartRemoveHandler(cartItem){
    setCart(cart.filter((data)=>data._id!==cartItem._id))
  }

  function cartToWishlist(cartItem){
    if(wishlist.find(item=>item._id===cartItem._id)){
      setCart(cart.filter(data=>data._id!==cartItem._id))
    }
    else{
      setWishlist([...wishlist,cartItem])
      setCart(cart.filter(data=>data._id!==cartItem._id))
    }
  }

  function incQty(cartItem){
    setCart(cart.map(item=>item._id===cartItem._id?{...item,quantity:item.quantity+1}:{...item}))
  }

  function decQty(cartItem){
    if(cartItem.quantity===1){
      setCart(cart.filter(data=>data._id!==cartItem._id))
    }
    else{
      setCart(cart.map(item=>item._id===cartItem._id?{...item,quantity:item.quantity-1}:{...item}))
    }
  }
  return (
      <>
        <div className="product-wrapper flex-col">
          <div className="center">
            <div className="image-conatiner">
              <img
                className="card-image"
                src={cartItem.img}
                alt="card-image"
              />
            </div>
             <div class="flex-row space-between">
            
            <div className="card-header-one">{cartItem.name}</div>
            <div class="rating-comp flex-row display-flex-center">
            <span class="star-icon">{cartItem.rating}
            <FaHeart/>
            </span> 
            </div>
            </div>

            <div className="card-price flex-row space-between">
              <div className="new">Rs{cartItem.discountedPrice}</div>
              <div className="discounted">Rs{cartItem.price}</div>
            </div>
            <div class="cart-quantity">
            <span class="quantity-header">Quantity:</span>
            <button class="quant-btn" onClick={()=>incQty(cartItem)}>+</button>
            <input class="quant-input" value={cartItem.quantity}/>
            <button class="quant-btn" onClick={()=>decQty(cartItem)}>-</button>
            </div>
            <div class="card-buttons flex-col gap-sm">
            <button class="links primary-link stack" onClick={()=>cartRemoveHandler(cartItem)}>Remove</button>
            <button class="links links-secondary stack" onClick={()=>cartToWishlist(cartItem)}>Add to wishlist</button>
          </div>
          </div>
        </div>
        </>
  )
}

export {ProductCard}