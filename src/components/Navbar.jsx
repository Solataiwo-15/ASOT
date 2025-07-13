import { NavLink } from "react-router-dom";
import { useState } from 'react';
import './Navbar.css';
import vector from '../assets/Vector.png';
import mail from '../assets/mail.png';
import info from '../assets/info.png';
import logo from '../assets/logo.png';


function Navbar () {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="contact-left">
                    <div className="contact-item"> 
                        <img 
                            src={vector} 
                            alt="" 
                            className='icon'
                        /> 
                        <p>
                            +234 818 5079 345
                        </p>
                    </div>
                    <span className="divider">
                        |
                    </span>
                    <div className="contact-item"> 
                        <img 
                            src={mail} 
                            alt="" 
                            className='icon'
                        /> 
                        <p>
                            hello@asotstudios.com
                        </p>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-item"> 
                        <p>
                            Orders of N200k+ Get Free Delivery
                        </p>
                        <img 
                            src={info} 
                            alt="" 
                            className='icon'
                        /> 
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="main-nav">
                <img 
                    src={logo} 
                    alt="asot logo" 
                    className="logo"
                />
                <ul className={`nav-links ${isOpen ? "show" : ""}`}>
                    <li>
                    <NavLink to="/"
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/aboutUs"
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        onClick={() => setIsOpen(false)}
                    >
                        About Us
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/services"
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        onClick={() => setIsOpen(false)}
                    >
                        Services
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/products"
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        onClick={() => setIsOpen(false)}
                    >
                        Products
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/contactUs"
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        onClick={() => setIsOpen(false)}
                    >
                        Contact Us
                    </NavLink>
                    </li>
                </ul>
                <button className="Get-btn">Get A Quote</button>
            </nav>
        </header>
    );
}

export default Navbar;