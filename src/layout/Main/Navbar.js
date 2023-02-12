import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <nav className="navbar">
        <div className="container">
            <div className="brand-logo">
                Job Portal
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
               click
            </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li> 
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;