import './App.css'
import Navbar from './components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import useScrollReveal from './components/ScrollReveal.jsx'
import './index.css'

function App() {
  useScrollReveal();
  return (
    <>
      <header>
        {/* projects, upcoming projects, experience */}
        <Navbar />
      </header>
      <Outlet />
    </>
  )
}

export default App
