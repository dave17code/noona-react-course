import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './component/Box.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Box name="리사" num={1}/>
    <Box name="제니" num={2}/>
    <Box name="지수" num={3}/>
    </>
  )
}

export default App