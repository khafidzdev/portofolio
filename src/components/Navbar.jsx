import { useState } from "react";
import "../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuActive, setMenuActive] = useState(false);

    function toggleMenu() {
        setMenuActive(!menuActive);
    }

    return (
        <nav className="navbar">
       
       <h1 className="logo">
                <Link to="/">Portfolio</Link>
            </h1>
            {/* Tombol Hamburger */}
            <button className={`menu-toggle ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </button>

            {/* Menu Navigasi */}
            <ul className={`nav-links ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
                <li><Link to="/">Home</Link></li>
                <li><HashLink to="/#portfolio">Portfolio</HashLink></li>
                        <li><HashLink to="/#about">About</HashLink></li>
                        <li><Link to="/experience">Experience</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
