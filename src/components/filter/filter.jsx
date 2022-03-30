import React from 'react'
import './filter.css'
import { useFilter } from '../../contexts/filter-context'




const Filter = () => {

  const{state,dispatch}=useFilter();
  const rating=[4,3,2,1]
  return (
    <div className="filter-container">
    <div className="flex-row">
      <h2>Filters</h2>
      <button onClick={()=>dispatch({type:"RESET"})} type="reset" className="btn btn-primary-light btn-clear">
        Clear
      </button>
    </div>
    <div className="flex-col">
      <h2>Price</h2>
      <input type="range" name="value" min="0" max="60000" step="15000" value={state.filterPrice} 
      onChange={(event)=>dispatch({type:"FILTER_PRICE",payload:event.target.value})} />
      <datalist id="tickmarks" className="price-values dis-flex justify-content-sb">
        <option value="0" label="0"></option>
        <option value="15000" label="15k"></option>
        <option value="30000" label="30k"></option>
        <option value="45000" label="45k"></option>
        <option value="60000" label="60k"></option>
      </datalist>
    </div>
    <div>
      <h2>Category</h2>
      <div>
        <input type="checkbox" 
        value="mobile-phones"
        checked={state.categories.includes("mobile-phones")}
        onChange={(event)=>dispatch({type:"CATEGORIES",payload:event.target.value})} />
        <label for="mobile-phones">Mobiles</label>
      </div>
      <div>
        <input type="checkbox" id="laptops" value="laptops"
        checked={state.categories.includes("laptops")}
        onChange={(event)=>dispatch({type:"CATEGORIES",payload:event.target.value})} />
        <label for="laptops">Laptops</label>
      </div>
      <div>
        <input type="checkbox" id="tabs"  value="tabs"
        checked={state.categories.includes("tabs")}
        onChange={(event)=>dispatch({type:"CATEGORIES",payload:event.target.value})} />
        <label for="tabs">Tablets</label>
      </div>
      <div>
        <input type="checkbox" id="earphones" value="earphones"
        checked={state.categories.includes("earphones")}
        onChange={(event)=>dispatch({type:"CATEGORIES",payload:event.target.value})} />
        <label for="earphones">Earphones</label>
      </div>
    </div>
    <div>
      <h2>Rating</h2>
      {rating.map((rating)=>{
         return(<div>
         <input key={rating} type="radio" name="rating" 
         checked={state.rating=== rating}
         onChange={()=>dispatch({type:"FILTER_RATING",payload:rating})} />
         <label>{rating} stars & above</label>
         </div>);
      })
      }
    </div>
    <div>
      <h2>Sort By</h2>
      <div>
        <input type="radio" id="low-to-high" checked={state.sort==="HIGH_TO_LOW"}
        onChange={()=>dispatch({type:"SORT",payload:"HIGH_TO_LOW"})}/>
        <label for="low-to-high">Price- Low to High</label>
      </div>
      <div>
        <input type="radio" id="high-to-low" checked={state.sort==="LOW_TO_HIGH"}
        onChange={()=>dispatch({type:"SORT",payload:"LOW_TO_HIGH"})}/>
        <label for="high-to-low">Price- High to Low</label>
      </div>
    </div>
  </div>
    
  )
}

export  {Filter}