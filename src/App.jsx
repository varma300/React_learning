import { useState } from 'react'
import './App.css'
import WithOutJSX from './Components/functionComponent'
import Welcome from './Components/Class_components'
import LifecyleA from './Components/LifecyleA'
import KeysList from './Component/Keys&List/Keys&List'
import EventHandling from './Component/EventHandling/EventHandling'
import UseRef from './Components/hooks/UseRef'
import UseEffect from './Components/hooks/fetchAPI'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <WithOutJSX />
      <Welcome /> */}
      {/* <LifecyleA /> */}
      {/* <KeysList /> */}
      {/* <EventHandling /> */}
      {/* <UseRef /> */}
      <UseEffect />
    </>
  )
}

export default App
