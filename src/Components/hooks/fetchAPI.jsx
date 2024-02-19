import React from 'react'
import { useState, useEffect } from 'react'
import '../css/fetchAPI.css'

const UseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/photos');
        const result = await responce.json();
        setData(result)
      } catch (error) {
        console.error('feaching error', error)
      }
    }
    fetchData();
  }, []

  )
  const out = data.map(iteam =>  <li key={iteam.id}> <img src={iteam.url}/> </li>)


  return (
    <div>
    <h1> featch API</h1>

      <ul className='fetch'>{out}</ul>

    </div>
  )
}

export default UseEffect