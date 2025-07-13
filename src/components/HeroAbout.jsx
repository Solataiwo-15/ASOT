import React from 'react';
import './HeroAbout.css';
// import aboutImage from '../assets/aboutImage.jpg'; // replace with actual image name

function HeroAbout() {
  return (
    <section 
        className="hero-about"
        // style={{ backgroundImage: `url(${aboutImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <h1>About Us</h1>
      <p className="subheading">
        Bring your Ideas to Life with <br /> High-Quality Prints
      </p>
    </section>
  );
}

export default HeroAbout;
