import React from 'react'

function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Tech Galaxy</h1>
        <p>Your trusted partner in technology</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2024, Tech Galaxy has been at the forefront of bringing 
              cutting-edge technology to consumers worldwide. We believe that 
              everyone should have access to the latest gadgets and electronics 
              that make life easier, more productive, and more enjoyable.
            </p>
            <p>
              Our mission is to bridge the gap between innovative technology and 
              everyday users, providing high-quality products with exceptional 
              customer service.
            </p>
          </div>
          <div className="about-image">
            <div className="placeholder-image">🏢</div>
          </div>
        </div>

        <div className="mission-section">
          <h2>Our Mission & Vision</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <h3>🎯 Our Mission</h3>
              <p>
                To provide access to cutting-edge technology with exceptional 
                customer service, making innovation accessible to everyone.
              </p>
            </div>
            <div className="mission-card">
              <h3>👁️ Our Vision</h3>
              <p>
                To be the world's most trusted destination for technology 
                products and solutions.
              </p>
            </div>
            <div className="mission-card">
              <h3>💎 Our Values</h3>
              <p>
                Innovation, Quality, Customer Focus, Integrity, and Excellence 
                in everything we do.
              </p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>About This Project</h2>
          <div className="project-info">
            <div className="project-card">
              <h3>👨‍💻 Developer</h3>
              <p><strong>Kesab Pokrel</strong></p>
              <p>Cloud Computing Student</p>
            </div>
            <div className="project-card">
              <h3>📚 Assignment</h3>
              <p><strong>Cloud Computing</strong></p>
              <p>E-Commerce Website Deployment</p>
            </div>
            <div className="project-card">
              <h3>☁️ Platform</h3>
              <p><strong>Render.com</strong></p>
              <p>Cloud Deployment Platform</p>
            </div>
            <div className="project-card">
              <h3>⚡ Technology</h3>
              <p><strong>React.js + Vite</strong></p>
              <p>Modern Web Framework</p>
            </div>
          </div>
        </div>

        <div className="features-showcase">
          <h2>What Makes Us Different</h2>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">🚀</span>
              <div>
                <h4>Fast Shipping</h4>
                <p>Free 2-day shipping on all orders over $50</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔧</span>
              <div>
                <h4>Expert Support</h4>
                <p>24/7 customer support from technology experts</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛡️</span>
              <div>
                <h4>Warranty Protection</h4>
                <p>Comprehensive warranty on all products</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💳</span>
              <div>
                <h4>Flexible Payment</h4>
                <p>Multiple payment options including installment plans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About