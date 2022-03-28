import React from 'react'
import { PriceCard } from '../../components/cart/price-card'
import { ProductCard } from '../../components/cart/product-card'

const Cart = () => {
  return (
    <>
    <h2 class="wishlist-header">My Cart</h2>
    <div class="flex-row flex-center overflow">
    <div class="flex-column">
    <ProductCard/>
    </div>
    <PriceCard/>
    </div>
    </>
  )
}

export {Cart}