// import Courier from "./tester"
import Card from "./components/card"
import { useState } from "react";
function App() {

  const[counter, setCounter] = useState(5)
  const addValue = () => {
    setCounter(counter + 1)
    if(counter === 10){
      alert("Counter cannot be more than 10")
      setCounter(10)}
  }
  const subValue = () => {
    setCounter(counter - 1)
    if(counter === 0){
      alert("Counter cannot be less than 0")
      setCounter(0)}
  }
  return (
    <>
    <h1 className="bg-green-500 p-4 rounded-md">Initial run</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <button onClick={subValue}>Subtract value</button>

    <Card title="card 1"/>
    <Card title="card 2"/>
    </>
  )
}

export default App
