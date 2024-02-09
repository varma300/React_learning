import React, { useState } from 'react'

const EventHandling = () => {
    let [state, setState] = useState(0)

    let add = ()=> setState(state+1)
  return (
    <div>

        <button onClick={add} >Click</button>
        <p>{state}</p>
    </div>
  )
}

export default EventHandling