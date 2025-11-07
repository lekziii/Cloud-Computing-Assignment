import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

function Products({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 999,
      image: "📱",
      description: "Latest iPhone with A17 Pro chip and titanium design",
      category: "Smartphones",
      features: ["6.1-inch Super Retina XDR", "A17 Pro chip", "48MP Main camera"]
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: 1199,
      image: "💻",
      description: "Supercharged by M2 chip with stunning Liquid Retina display",
      category: "Laptops",
      features: ["13.6-inch Liquid Retina", "M2 chip", "18-hour battery"]
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      price: 399,
      image: "🎧",
      description: "Industry-leading noise cancellation with 30-hour battery",
      category: "Audio",
      features: ["Industry-leading ANC", "30-hour battery", "Touch controls"]
    },
    {
      id: 4,
      name: "iPad Pro",
      price: 799,
      image: "📟",
      description: "M2 chip with stunning Liquid Retina XDR display",
      category: "Tablets",
      features: ["M2 chip", "Liquid Retina XDR", "5G capable"]
    },
    {
      id: 5,
      name: "Apple Watch Series 9",
      price: 399,
      image: "⌚",
      description: "Advanced health monitoring with always-on display",
      category: "Wearables",
      features: ["Advanced health monitoring", "Always-on display", "GPS"]
    },
    {
      id: 6,
      name: "PlayStation 5",
      price: 499,
      image: "🎮",
      description: "Next-gen gaming console with 4K 120fps support",
      category: "Gaming",
      features: ["4K 120fps gaming", "Ray tracing", "825GB SSD"]
    },
    {
      id: 7,
      name: "Samsung Galaxy S24",
      price: 899,
      image: "📱",
      description: "AI-powered smartphone with advanced camera system",
      category: "Smartphones",
      features: ["AI-powered features", "Advanced camera", "8GB RAM"]
    },
    {
      id: 8,
      name: "Dell XPS 13",
      price: 999,
      image: "💻",
      description: "Ultra-thin laptop with InfinityEdge display",
      category: "Laptops",
      features: ["InfinityEdge display", "Intel Core i7", "16GB RAM"]
    }
  ]

  const categories = ['All', 'Smartphones', 'Laptops', 'Audio', 'Tablets', 'Wearables', 'Gaming']

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Discover the latest in technology</p>
      </div>

      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <h3>No products found in this category</h3>
          <p>Try selecting a different category</p>
        </div>
      )}
    </div>
  )
}

export default Products