import {useState} from 'react';
function Courier() {
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
    <div className="bg-blue-400 inline-block p-5 rounded-lg m-4 ">
    <button onClick={addValue} className="bg-green-300 border-black border-2 m-3">Add value</button>
    <button onClick={subValue} className="bg-red-500 border-black border-2 m-3">Subtract value</button>
    </div>
    </>
  )
}

export default Courier;