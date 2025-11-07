import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header({ cartCount, totalPrice, onCartClick }) {
  const location = useLocation()

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>Tech Galaxy</h1>
          </Link>
          <span>🚀</span>
        </div>
        
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={location.pathname === '/products' ? 'active' : ''}
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
        </nav>

        <div className="cart-icon" onClick={onCartClick}>
          <span>🛒</span>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          <span className="cart-total">${totalPrice}</span>
        </div>
      </div>
    </header>
  )
}

export default Header