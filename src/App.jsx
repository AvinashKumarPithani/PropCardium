import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl bg-green-700 p-3 rounded-md'>PropCardium</h1>
      <Card />
    </>
  )
}

export default App
