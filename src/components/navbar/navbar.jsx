import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <>
    <nav className="navigation container nav-bar">
  <Link to="/" className="links links-mr">
    <div  className="nav-brand">Stellar store</div>
  </Link>
  <ul className="list-non-bullet list-align flex-row">
    <div className="flex-row search-container">
      <button className="list-non-bullet search-button">
        <i className="fa-solid fa-magnifying-glass glass-icon-color"></i>
      </button>
      <input
        className="list-non-bullet input-bar"
        type="text"
        placeholder="Search Products"
      />
    </div>
    <li className="list-inline">
      <Link className="links link-active" to="/wishlist">
          WishList
        
      </Link>
    </li>
    <li className="list-inline">
      <Link className="links link-active" to="/cart-page">
        Cart

      </Link>
    </li>
    <li className="list-inline">
      <Link className="links link-active" to="/product-listing">Products</Link>
    </li>
    <li className="list-inline">
      <Link className="links" to="/login">Login</Link>
    </li>
  </ul>
</nav>

</>
  )
}

export {Navbar}