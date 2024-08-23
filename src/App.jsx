import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  let avatar = {
    a1 : 'Matsya',
    a2 : 'Kurma',
    a3 : 'Varaha',
    a4 : 'Narasimha',
    a5 : 'Vamana',
    a6 : 'Parashurama',
    a7 : 'Sri Rama',
    a8 : 'Sri Krishna',
    a9 : 'Buddha',
    a10 : 'Kalki'
  }
  return (
    <>
      <h1 className='text-2xl bg-green-700 p-3 rounded-md'>Avatara Purusha</h1>
      <Card avatar={avatar.a8} state="Super Consciousness"/>
      <Card avatar={avatar.a7} state="Maryada Purushottama"/>
      <Card avatar={avatar.a6} state="Warrior"/>
    </>
  )
}

export default App
