import { FaShoppingCart } from "react-icons/fa";
import React from 'react'

const Styling = () => {
    const style = {
        color: "red",
        backgroundColor: "teal",
        padding: "2rem",
        textDecoration: "underline"
    }
  return (
    <section>
        <FaShoppingCart style={{color:"blue"}} />
        <h1 style={style}>Good Afternoon Mr Tembo</h1>
    </section>
  )
}

export default Styling