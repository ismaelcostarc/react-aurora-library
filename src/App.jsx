import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './lib/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
 <Button></Button>
    </div>
  )
}

export default App
