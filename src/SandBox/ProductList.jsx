import React from 'react'

const products = [
    {id:1,name:"Phone",price:"$699"},
    {id:2,name:"Laptop",price:"$1500"},
    {id:3, name:"Headphones",price:"$300"}
]
const ProductList = () => {
  return (
    <div>
        {products.map(({id,name,price}) => (
            <ul key={id}>
                <li>name:{name}</li>
                <li>price:{price}</li>
            </ul>
        ))}
    </div>
  )
}

export default ProductList