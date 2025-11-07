import React from 'react'

function Cart({ cart, onRemove, total, onClose }) {
  return (
    <div className="cart-overlay">
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Shopping Cart ({cart.length})</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cart.map(item => (
              <div key={item.cartId} className="cart-item">
                <div className="item-image">{item.image}</div>
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => onRemove(item.cartId)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <strong>Total: ${total}</strong>
            </div>
            <button className="checkout-btn">
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart