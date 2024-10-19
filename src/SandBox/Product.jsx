import React from 'react'

const Product = ({productName,productPrice}) => {
  return (
    <div>
        <h2>PRODUCT: {productName}</h2>
        <h2>Price: {productPrice}</h2>
    </div>
  )
}

export default Product