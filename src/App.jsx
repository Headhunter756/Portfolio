import './App.css'
import Navbar from './components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import useScrollReveal from './components/ScrollReveal.jsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react'

function App() {
  useScrollReveal();
  return (
    <>
      <header>
        {/* projects, upcoming projects, experience */}
        <Navbar />
      </header>
      <Outlet />
      <Analytics />
    </>
  )
}

export default App
