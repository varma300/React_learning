import { useState } from 'react'
import './App.css'
import WithOutJSX from './Components/functionComponent'
import Welcome from './Components/Class_components'
import LifecyleA from './Components/LifecyleA'
import KeysList from './Component/Keys&List/Keys&List'
import EventHandling from './Component/EventHandling/EventHandling'
import UseRef from './Components/hooks/UseRef'
import UseEffect from './Components/hooks/fetchAPI'
import Subscription from './Components/hooks/Subscription'
import ManullyDOMManupulation from './Components/hooks/ManullyDOMManupulation'


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
      {/* <UseEffect /> */}
      {/* <Subscription /> */}
      <ManullyDOMManupulation />

    </>
  )
}

export default App
