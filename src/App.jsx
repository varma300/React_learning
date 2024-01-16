import { useState } from 'react'
import './App.css'
import WithOutJSX from './assets/Components/functionComponent'
import Welcome from './assets/Components/Class_components'
import LifecyleA from './assets/Components/LifecyleA'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WithOutJSX />
      <Welcome />
      <LifecyleA />
    </>
  )
}

export default App
