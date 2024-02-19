import React, { useRef, useState } from 'react'

const UseRef = () => {
    const inputRef = useRef()
    const [data, setData] = useState([])
    const add = ()=>{
        const newData = inputRef.current.value
        setData([...data,newData])
    }
    const out = data.map((e,i) => <li key={i} >{e}</li>)
  return (
    <div>
        <input ref={inputRef} />
        <button onClick={add} >Add</button>
        <ul>{out}</ul>

    </div>
  )
}

export default UseRef