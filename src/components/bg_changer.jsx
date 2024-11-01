import {useState} from 'react'

function Bg() {
    const [color, setColor] = useState("red")
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}></div>
    <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl">
            <button onClick={() => setColor("red")} className="outline-none p-3 py-2 rounded-full text-white" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColor("green")}className="outline-none p-3 py-2 rounded-full text-white" style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => setColor("blue")} className="outline-none p-3 py-2 rounded-full text-white" style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={() => setColor("orange")} className="outline-none p-3 py-2 rounded-full text-white" style={{backgroundColor: "orange"}}>Orange</button>
        </div>
    </div>
    </>
  )
}

export default Bg