import React from 'react'
import './categories.css'
import Header from "../../assets/camera.jpg"
import {Link} from 'react-router-dom'


const Categories = () => {
  return (
    <Link to='product-listing' className='category-link'>
        <div className="flex-col category-wrapper">
          <div className="center">
            <div className="image-conatiner">
              <img
                className="card-image"
                src={Header}
                alt="card-image"
              />
            </div>
            <h2>Cameras</h2>
            </div>
            </div>

    </Link>
  )
}

export  {Categories}
