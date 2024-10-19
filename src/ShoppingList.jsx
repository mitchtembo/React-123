import { useState } from "react";

const ShoppingList = () => {
    const [cart, setCart] = useState({
        name: "",
        items: [],
        quantity: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!cart.name || !cart.quantity) return;

        const newItem = {
            name: cart.name,
            quantity: parseInt(cart.quantity) || 0
        };

        setCart(prevCart => ({
            ...prevCart,
            items: [...prevCart.items, newItem], // Spread existing items into a new array
            name: "",
            quantity: ""
        }));
    };

    return (
        <div>
            <h1>Shopping List</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Item Name"
                    value={cart.name}
                    onChange={(e) => setCart(prevCart => ({ ...prevCart, name: e.target.value }))}
                />
                <input 
                    type="number"
                    placeholder="Quantity"
                    value={cart.quantity}
                    onChange={(e) => setCart(prevCart => ({ ...prevCart, quantity: e.target.value }))}
                />
                <button type="submit">Add Item</button>
            </form>

            <ul>
                {cart.items.map((item, index) => (
                    <li key={index}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;
