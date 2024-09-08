import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import KrishnaImage from './images/Krishna.webp'
import RamaImage from './images/Rama.avif'
import Parashurama from './images/Parashurama.avif'

function App() {
  const avatars = {
    a1: { name: 'Matsya', title: 'Fish', idol: KrishnaImage },
    a2: { name: 'Kurma', title: 'tortoise', idol: KrishnaImage },
    a3: { name: 'Varaha', title: '', idol: KrishnaImage },
    a4: { name: 'Narasimha', title: 'Warrior', idol: KrishnaImage },
    a5: { name: 'Vamana', title: 'Warrior', idol: KrishnaImage },
    a6: { name: 'Parashurama', title: 'Warrior', idol: Parashurama,
      description: "Parasurama is the sixth avatar of Vishnu, known as a warrior sage with a fiery temperament. He is portrayed as a Brahmin with the traits of a Kshatriya, who wields an axe gifted by Shiva. Parasurama is known for ridding the world of corrupt and oppressive kings, thus restoring order and balance."
     },
    a7: { name: 'Sri Rama', title: 'Maryada Purushottama', idol: RamaImage, 
      description: "Rama, the seventh avatar of Vishnu, is the protagonist of the Ramayana. He embodies the ideal king and is revered for his unwavering adherence to dharma (righteousness). His life story is a tale of duty, devotion, and the triumph of good over evil, particularly in his battle against the demon king Ravana."
    },
    a8: { name: 'Sri Krishna', title: 'Supreme Consciousness', idol: KrishnaImage, 
      description: "Krishna is the eighth avatar of Vishnu, often depicted as a playful, divine child and a master of diplomacy and strategy. He is celebrated for his role in the Mahabharata, where he serves as Arjuna's charioteer and delivers the Bhagavad Gita, a spiritual discourse on duty and righteousness." 
    },
    a9: { name: 'Buddha', title: 'Supreme Consciousness', idol: KrishnaImage },
    a10:{ name: 'Kalki', title: 'Supreme Consciousness', idol: KrishnaImage },
  };

  return (
    <>
      <h1 className='text-2xl bg-green-700 p-3 rounded-md'>Avatars of Vishnu</h1>
      <Card avatar={avatars.a8.name} title={avatars.a8.title} idol={avatars.a8.idol} description={avatars.a8.description}/>
      <Card avatar={avatars.a7.name} title={avatars.a7.title} idol={avatars.a7.idol} description={avatars.a7.description}/>
      <Card avatar={avatars.a6.name} title={avatars.a6.title} idol={avatars.a6.idol} description={avatars.a6.description}/>
    </>
  );
}

export default App;
