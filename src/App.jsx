import { useState } from 'react'
import './App.css'
import WithOutJSX from './assets/Components/functionComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WithOutJSX />
    </>
  )
}

export default App
