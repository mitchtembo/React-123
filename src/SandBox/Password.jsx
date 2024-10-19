import React from 'react'

const ValidPassword = () => <h1>Password Valid </h1>
 const InvalidPassword = () => <h2>Password Invalid yikes</h2>
const Password = ({valid}) => {
    
   return valid ? <ValidPassword /> : <InvalidPassword/>
  
}

export default Password