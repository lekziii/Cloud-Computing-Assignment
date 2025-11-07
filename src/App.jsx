import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to My React Website! 🚀</h1>
        <p>Deployed on Render.com</p>
        <div className="assignment-info">
          <p>By ~ Kesab Pokrel</p>
          <p>Cloud Computing Assignment</p>
        </div>
      </header>
      
      <main className="main-content">
        <div className="card">
          <h2>Counter Example</h2>
          <p>Count: {count}</p>
          <div className="button-group">
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>

        <div className="card">
          <h2>About This Site</h2>
          <p>This is a simple React website that demonstrates:</p>
          <ul>
            <li>✅ React functional components</li>
            <li>✅ useState hook</li>
            <li>✅ Event handling</li>
            <li>✅ Responsive CSS</li>
            <li>✅ Easy deployment on Render</li>
          </ul>
        </div>

        <div className="card">
          <h2>Cloud Computing Features</h2>
          <div className="features">
            <div className="feature">
              <h3>☁️ Scalability</h3>
              <p>Automatically scales with user demand</p>
            </div>
            <div className="feature">
              <h3>🚀 Deployment</h3>
              <p>Easy deployment on cloud platforms</p>
            </div>
            <div className="feature">
              <h3>💾 Reliability</h3>
              <p>High availability and uptime</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>By ~ Kesab Pokrel • Cloud Computing Assignment • Deployed on Render.com</p>
      </footer>
    </div>
  )
}

export default App