import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import CurrentVideo from './components/CurrentVideo/CurrentVideo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CurrentVideo />
    </>
  )
}

export default App
