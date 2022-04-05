import React from 'react'
import './categories.css'
import {Link, useNavigate} from 'react-router-dom'
import { useFilter } from '../../contexts/filter-context'


const Categories = ({item}) => {
  const {dispatch}=useFilter();
  const navigate=useNavigate();

  function categoryHandler(name){
   dispatch({type:"CATEGORIES",payload:name})
   navigate("/product-listing")
  }
  return (
    
        <div className="flex-col category-wrapper"
        onClick={()=>categoryHandler(item.categoryName)}>
          <div className="center">
            <div className="image-conatiner">
              <img
                className="card-image"
                src={item.img}
                alt="card-image"
              />
            </div>
            <h2>{item.categoryName}</h2>
            </div>
            </div>

    
  )
}

export  {Categories}
