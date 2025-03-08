import { useState } from "react";
import "../styles/Navbar.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
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
            <button className={`menu-toggle ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
                {menuActive ? <IoMdClose /> : <FaBars />}
            </button>
            <ul className={`nav-links ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
                <li><HashLink to="/#home">Home</HashLink></li>
                <li><HashLink to="/#about">About</HashLink></li>
                <li><HashLink to="/#projects">Projects</HashLink></li>
                <li><HashLink to="/#contact">Contact</HashLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
