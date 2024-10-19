import React, { useState } from 'react'


const Counter = () => {
    const [count , setCount] = useState(0)
    const handleCount = () => setCount(prevCount => prevCount + 1)
  return (
    <div>
        <h1>value: {count}</h1>
        <button onClick={handleCount}>Increment</button>
    </div>
  )
}

export default Counter