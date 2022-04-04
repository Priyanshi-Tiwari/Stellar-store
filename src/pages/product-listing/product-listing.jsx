import React from 'react'
import './product-listing.css'
import { Card } from '../../components/card/card'
import { Filter } from '../../components/filter/filter'
import { useProduct } from '../../contexts/product-data-context'
import { useFilter } from '../../contexts/filter-context'
import {sortedData, filteredData} from './utils'


const ProductListing= () => {
  const{state}=useFilter();
  const {data}=useProduct();
  const sortData=sortedData([...data],state.sort);
  const filterData=filteredData([...sortData],state)
  return (
    <div class="flex-row">
      <Filter/>
      <div className='grid-container'>
        {filterData?.map((product)=>{
       return <div className='grid-item'>
         <Card product={product}/>
        </div>
          
        })
        }
      </div>
      
    </div>
  )
}

export {ProductListing}