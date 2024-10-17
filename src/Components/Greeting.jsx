import React from 'react'

const Greeting = () => {

    function sayHi(name) {
        return `Hi ${name}! how are you?`
    }

    function currentDate(){
        const fullDate = new Date()
        return `${fullDate}`

    }
  return (
    <div>
        <h1>{sayHi("Mitchel Tembo")}</h1>
        <p>The date is {currentDate()} </p>
    </div>
  )
}

export default Greeting