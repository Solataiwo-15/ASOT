import React from 'react';
import './IntroAbout.css';
import bagImage from '../assets/bagImage.png'; // replace with actual image name

function IntroAbout() {
  return (
    <section className="intro-about">
      <div className="intro-image">
        <img src={bagImage} alt="Digital Printing Bag" />
      </div>

      <div className="intro-content">
        <p className="label">ABOUT US</p>
        <h2>Experience The Power<br />of Digital Printing</h2>
        <p className="description">
          Imperdiet turpis ut quis scelerisque ullamcorper eu tellus. 
          Vitae nulla in sollicitudin augue tincidunt lobortis.
        </p>
      </div>
    </section>
  );
}

export default IntroAbout;
