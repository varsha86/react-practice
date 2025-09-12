import Button from './Button'

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center"}}>Hey Folks</h1> 
      <div style={{ display: "flex", justifyContent: "center", gap: "10px"}}> 
        <Button text="Click Me" color="rgba(65, 110, 88, 0.4)" /> 
        <Button text="Submit" color="rgba(85, 110, 148, 0.53)" /> 
      </div> 
      
    </>
  )
}

export default App
