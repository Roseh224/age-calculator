import { useState } from 'react'
import './App.css'

import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header />
      <h2> inputs x3 </h2>
      <h2> units </h2>
      <h2> button </h2>
    </div>
    <div>
      <h1> result </h1>
      <h2> image </h2>
    </div>
    </>
  )
}

export default App
