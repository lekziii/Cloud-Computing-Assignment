import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="hero-section">
        <h1>Tech Galaxy 🚀</h1>
        <p>Latest Gadgets • Best Prices • Free Shipping</p>
        <div className="assignment-info">
          <p>By ~ Kesab Pokrel</p>
          <p>Cloud Computing Assignment - E-Commerce Demo</p>
        </div>
        <div className="hero-buttons">
          <Link to="/products" className="cta-button">Shop Now</Link>
          <Link to="/about" className="cta-button secondary">Learn More</Link>
        </div>
      </div>

      <div className="features-section">
        <h2>Why Shop With Us?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>🚚 Free Shipping</h3>
            <p>Free delivery on orders over $50</p>
          </div>
          <div className="feature">
            <h3>🔒 Secure Payment</h3>
            <p>100% secure payment processing</p>
          </div>
          <div className="feature">
            <h3>📞 24/7 Support</h3>
            <p>Round the clock customer service</p>
          </div>
          <div className="feature">
            <h3>↩️ Easy Returns</h3>
            <p>30-day return policy</p>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Why We're the Best</h2>
        <div className="stats-grid">
          <div className="stat">
            <h3>10,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Products Available</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
          <div className="stat">
            <h3>30 Days</h3>
            <p>Money Back Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home