import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Landing from './LandingPage/landing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     
      <div><Landing/></div>
      
    </>
  )
}

export default App
