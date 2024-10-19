import { useState } from 'react'
import React from 'react'
const Button = () => {
  const [count , setCount] = useState(0);
  const btn = {
    display: 'inline-block',
    padding: '1rem 2rem',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    textAlign: 'center'
  }
  
  const handleIncrease = () => {
    setCount(count => count + 1)
    }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button style={btn} onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default Button