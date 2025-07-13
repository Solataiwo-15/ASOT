import React from 'react';
import './AboutWelcome.css';
import printerImg1 from '../assets/print1.png'; // replace with your actual path
import printerImg2 from '../assets/print2.png';

function AboutWelcome() {
  return (
    <section className="about-welcome">
      <div className="about-welcome-images">
        <img src={printerImg1} alt="Digital Printer" className="img-one" />
        <img src={printerImg2} alt="Color Printer" className="img-two" />
      </div>

      <div className="about-welcome-text">
        <h1 className="welcome-label">Welcome</h1>
        <h2>
          Welcome To <span>Asot</span>,<br />
          Helping you find the best<br />
          <strong>Digital Printing Solutions.</strong>
        </h2>
        <p className='about-welcome-text-desc'>
          We offer a complete range of printing services, from business cards to banners. 
          State-of-the-art technology and expertise ensure top quality results for all your printing needs.
        </p>
        <p className='about-welcome-text-desc'>
          We offer a complete range of printing services, from business cards to banners. 
          State-of-the-art technology and expertise ensure top quality results for all your printing needs.
        </p>
        <p className='about-welcome-text-desc'>
          We offer a complete range of printing services, from business cards to banners. 
          State-of-the-art technology and expertise ensure top quality results for all your printing needs.
        </p>
        <p className="founder">
          Taiwo A.O – Founder, C.E.O
        </p>
      </div>
    </section>
  );
}

export default AboutWelcome;
