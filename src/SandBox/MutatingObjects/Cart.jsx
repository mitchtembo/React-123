import { useState } from "react"
const Cart = () => {
    const initialCart = {
        id: 1,
        name: "peas",
        price: 5,
        inStock: true
    }
    const [products, setProducts] = useState(initialCart)

    const handleProduct = () => {
        setProducts(prevProducts => (
            {...prevProducts,price: prevProducts.price + 3}
        ))

    }
    return(<div>
        <h1>Inventory:</h1>
        <h2>prodName: {products?.name}</h2>
        <h3>price: {products?.price}</h3>   
        <h5>{products?.inStock}</h5>
        <button onClick={handleProduct}>updatePrice</button>
    </div>)
}

export default Cart