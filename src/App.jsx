import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Landing from './LandingPage/landing'
import Products from './Products/products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     
      <div><Landing /></div>
      <div><Products /></div>
    </>
  )
}

export default App
