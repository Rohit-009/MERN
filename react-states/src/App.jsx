import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './Counter'
import Likebtn from './Likebtn'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Likebtn/>
    </>
  )
}

export default App
