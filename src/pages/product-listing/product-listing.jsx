import React from 'react'
import './product-listing.css'
import { Card } from '../../components/card/card'
import { Filter } from '../../components/filter/filter'

const ProductListing= () => {
  return (
    <div class="flex-row">
      <Filter/>
      <div className='grid-container'>
        <div className='grid-item'>
         <Card/>
        </div>
      </div>
      
    </div>
  )
}

export {ProductListing}