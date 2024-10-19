import React from 'react'

const ComponentOne = ({count, handleCount}) => {

    const handleIncrement = () => handleCount();
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default ComponentOne