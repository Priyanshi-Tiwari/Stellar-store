import React from 'react'
import './filter.css'

const Filter = () => {
  return (
    <div className="filter-container">
    <div className="flex-row">
      <h2>Filters</h2>
      <button type="reset" className="btn btn-primary-light btn-clear">
        Clear
      </button>
    </div>
    <div className="flex-col">
      <h2>Price</h2>
      <div className="price-values dis-flex justify-content-sb">
        <p>1000</p>
        <p>3000</p>
        <p>5000</p>
      </div>
      <input type="range" name="value" step="2000" max="20" />
    </div>
    <div>
      <h2>Category</h2>
      <div>
        <input type="checkbox" id="mens-cloth" />
        <label for="mens-cloth">Men's Cloth</label>
      </div>
      <div>
        <input type="checkbox" id="womens-cloth" />
        <label for="womens-cloth">Women's Cloth</label>
      </div>
      <div>
        <input type="checkbox" id="kids-cloth" />
        <label for="kids-cloth">Kids's Cloth</label>
      </div>
    </div>
    <div>
      <h2>Rating</h2>
      <div>
        <input type="radio" id="above-four" />
        <label for="above-four">4 & above stars</label>
      </div>
      <div>
        <input type="radio" id="above-three" />
        <label for="above-three">3 & above stars</label>
      </div>
      <div>
        <input type="radio" id="above-two" />
        <label for="above-two">2 & above stars</label>
      </div>
      <div>
        <input type="radio" id="above-one" />
        <label for="above-one">1 & above stars</label>
      </div>
    </div>
    <div>
      <h2>Sort By</h2>
      <div>
        <input type="radio" id="low-to-high" />
        <label for="low-to-high">Price- Low to High</label>
      </div>
      <div>
        <input type="radio" id="high-to-low" />
        <label for="high-to-low">Price- High to Low</label>
      </div>
    </div>
  </div>
    
  )
}

export  {Filter}