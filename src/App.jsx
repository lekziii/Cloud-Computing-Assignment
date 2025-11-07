import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './components/Cart'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import './styles.css'

function App() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }])
  }

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0)
  }

  return (
    <Router>
      <div className="App">
        <Header 
          cartCount={cart.length} 
          totalPrice={getTotalPrice()}
          onCartClick={() => setShowCart(!showCart)}
        />
        
        {showCart && (
          <Cart 
            cart={cart} 
            onRemove={removeFromCart}
            total={getTotalPrice()}
            onClose={() => setShowCart(false)}
          />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer className="footer">
          <p>Tech Galaxy • By ~ Kesab Pokrel • Cloud Computing Assignment</p>
          <p>Deployed on Render.com • This is a demo e-commerce site</p>
        </footer>
      </div>
    </Router>
  )
}

export default App