import { useContext, useState } from "react";
import { NavLink } from "react-router-dom"; 
import { ThemeContext } from './ThemeContext'
import './styles/Navbar.css'

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); const [isOpen, setIsOpen] = useState(false); const toggleNavbar = () => setIsOpen(!isOpen);
    return (
        <nav className="navbar">
            <h3 className="web_name">Ayush Ghara Portfolio</h3>

            {/* Toggle button visible on mobile */}
            <button className="nav-toggle" onClick={toggleNavbar}>☰</button>

            {/* Navigation links */}
            <ul className={`nav-list ${isOpen ? "active" : ""}`}>
                <li>
                    <button onClick={toggleTheme} className="theme-toggle">
                        {theme == "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                    </button>
                </li>
                <li><NavLink to="/" className="nav-link">About Me</NavLink></li>
                <li><NavLink to="/ps" className="nav-link">Project And Skills</NavLink></li>
                <li><NavLink to="/contact" className="nav-link">Contact Me</NavLink></li>
            </ul>
        </nav>
    );
}
export default Navbar;