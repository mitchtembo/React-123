import React from 'react'

const ComponentTwo = ({count, handleCount}) => {
const handleClick = () => handleCount()
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ComponentTwo