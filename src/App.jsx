import { useState } from 'react'
import './App.css'
import WithOutJSX from './assets/Components/functionComponent'
import Welcome from './assets/Components/Class_components'
import LifecyleA from './assets/Components/LifecyleA'
import KeysList from './Component/Keys&List/Keys&List'
import EventHandling from './Component/EventHandling/EventHandling'
import UseRef from './Component/Useref/UseRef'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <WithOutJSX />
      <Welcome /> */}
      {/* <LifecyleA /> */}
      {/* <KeysList /> */}
      {/* <EventHandling /> */}
      <UseRef />
    </>
  )
}

export default App
