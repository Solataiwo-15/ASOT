import React from 'react';
import './CTA.css';
import bgPattern from '../assets/cta-bg.png'; // replace with your actual image

function CTA() {
  return (
    <section
      className="cta-section"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <h2 className="cta-heading">Request Your Free Printing Sample!</h2>
      <p className="cta-subtext">See, Touch, and Feel the Excellence of Asot.</p>
      <button className="cta-button">Request Now!</button>
    </section>
  );
}

export default CTA;
