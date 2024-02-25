import { useState } from 'react'
import './index.css'
import HomePage from './components/HomePage'
// import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />

    </>
  )
}

export default App
