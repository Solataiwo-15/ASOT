import React from 'react';
import './Footer.css';
import logo from '../assets/footer-logo.png'; // update path
import { FaInstagram, FaLinkedin, FaFacebook, FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-top">
            <div className="footer-left">
                <img src={logo} alt="Asot Logo" className="footer-logo" />
                <p className="footer-tagline">Unlock Your Business's Potential with Our <br /> Social Media Solutions</p>
                <div className="footer-links">
                    <span>Overview</span>
                    <span>Features</span>
                    <span>Pricing</span>
                    <span>Careers</span>
                    <span>Help</span>
                    <span>Privacy</span>
                </div>
                <div className="social-icons">
                    <FaInstagram />
                    <FaLinkedin />
                    <FaFacebook />
                    <FaXTwitter />
                </div>
            </div>

            <div className="footer-right">
                <p className="newsletter-text">
                    Stay Up-to-Date with the Latest Social Media Strategies and Insights
                </p>
                <div className="newsletter-form">
                    <input type="email" placeholder="Your Email" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>© 2025 Asot. All rights reserved.</p>
            <p>Designed by Asot</p>
        </div>
    </footer>
  );
}

export default Footer;
