import React from 'react';
import './Hero.css';
import heroImg from '../assets/Hero-Img.png';


function Hero () {
    return ( 
        <section className="hero">
            <div className="hero-left">
                <h1 className="hero-title">
                    Show Up, <br /> Stand Out!
                </h1>
                <p className="hero-desc">
                    Bring your Ideas to Life with <br /> High-Quality Prints.
                </p>
                <p className="small-text">
                    Ready to elevate your brand? <br /> Get a free quote on your next printing project.
                </p>
                <button className="Get-btn">
                    Get A Quote
                </button>
            </div>

            <div className="hero-right">
                <img src={heroImg} alt="Delivery Guy" />
            </div>
        </section>
    );
}
 
export default Hero;
