import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navigation container nav-bar">
  <a href="../index.html" className="links links-mr">
    <div className="nav-brand">Stellar store</div>
  </a>
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
      <a className="links link-active" href="/cart-page">
        Cart

      </a>
    </li>
    <li className="list-inline">
      <a className="links link-active" href="/product-listing">Products</a>
    </li>
    <li className="list-inline">
      <a className="links" href="/login">Login</a>
    </li>
  </ul>
</nav>

</>
  )
}

export {Navbar}