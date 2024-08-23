import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import KrishnaImage from './images/Krishna.webp'
import RamaImage from './images/Rama.avif'
import Parashurama from './images/Parashurama.avif'

function App() {
  const avatars = {
    a1: { name: 'Matsya' },
    a2: 'Kurma',
    a3: 'Varaha',
    a4: 'Narasimha',
    a5: 'Vamana',
    a6: { name: 'Parashurama', title: 'Warrior', idol: Parashurama },
    a7: { name: 'Sri Rama', title: 'Maryada Purushottama', idol: RamaImage },
    a8: { name: 'Sri Krishna', title: 'Supreme Consciousness', idol: KrishnaImage },
    a9: 'Buddha',
    a10: 'Kalki'
  };

  return (
    <>
      <h1 className='text-2xl bg-green-700 p-3 rounded-md'>Avatara Purusha</h1>
      <Card avatar={avatars.a8.name} title={avatars.a8.title} idol={avatars.a8.idol} />
      <Card avatar={avatars.a7.name} title={avatars.a7.title} idol={avatars.a7.idol} />
      <Card avatar={avatars.a6.name} title={avatars.a6.title} idol={avatars.a6.idol} />
    </>
  );
}

export default App;
