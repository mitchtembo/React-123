const App = () => {
  return <User name = "Mitchel Tembo"age = {26} isMarried = {false} />
  
}

const User = ({name,age,isMarried}) => {
  return(
    <section>
      <h1>Hello {name}</h1>
      <p>Are you ready to celebrate your {age}th birthday</p>
      <h3>Any plans of getting married {isMarried ? "Yess" : "Umm No!"}</h3>
  </section>
  )
}


export default App