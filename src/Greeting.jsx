import React from 'react'

const Greeting = ({timeOfDay}) => {
 return (timeOfDay == "morning") ? <h2>Good Morning!</h2> : <h2>Good Afternoon!</h2>
}

export default Greeting