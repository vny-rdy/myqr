import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SmoothScrollHero } from './components/first'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SmoothScrollHero/>
    </>
  )
}

export default App
