import React, { useState } from 'react'

const TodoLis = () => {
    const [todos, setTodos] = useState([]) /* takes an array */
    const [inputValue, setInputValue] = useState("") /* takes a string */
    const handleSubmit = (e) => {
        e.preventDefault(); /* prevents form default behavior */
        if(inputValue.trim()) {
            setInputValue(inputValue);
            setTodos([...todos, inputValue]);
            setInputValue("") /* clear field */
        }


    }
        
        const handleChange = e => setInputValue(e.target.value)

        console.log(todos)
    
        return (
            <div>
        <form action="" onSubmit={handleSubmit}>
        
        <input type="text" onChange={handleChange} placeholder='Enter item' value={inputValue}/>
        
        <button type='submit'>Add todo</button>
        </form>
        <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}

        </ul>
        </div>
  )
}

export default TodoLis