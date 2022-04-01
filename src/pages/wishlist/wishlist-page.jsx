import React from 'react'
import './wishlist-page.css'
import { Wishlist} from '../../components/wishlist/wishlist'
import { useWishlist } from '../../contexts/wishlist-context'

const WishlistPage = () => {
  
  const {wishlist}=useWishlist();
  return (
    <div className='four-grid-container wishlist-height'>
        
          {(wishlist.length===0)?<h2>Your wishlist is empty</h2>:
          wishlist.map((item) =>{
            return(<div className='grid-item'>
               <Wishlist item={item} key={item._id}/>
               </div>)}
          )
          }

        </div>
        
  )
}

export {WishlistPage}