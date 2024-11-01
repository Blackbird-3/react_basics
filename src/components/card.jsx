import React from 'react'

function Card({title="card"}) {
  return (
    <>
    <div className="bg-blue-400 inline-block p-5 rounded-lg m-4" >
        <h2>{title}</h2>
        <p>This is a simple card description.</p>
        <button>Read More</button>
        </div>
    </>
  )
}

export default Card


