import React from 'react';
import './About.css';
import img from '../assets/Image.png';
import img1 from '../assets/Image-1.png';
import img2 from '../assets/Image-2.png';
import arrow from '../assets/Arrow 1.png';

function About() {
    const images = [img, img1, img2];
    const headings = ["High-Quality Printing", "Customization Options", "Quick Turnaround Time"]
    const paragraphs = ["Ensuring 300 DPI images and utilizing professional services with high-end equipment and archival inks.",
                        "Extensive customization empowers you to create a truly unique product.",
                        "Explore rush printing options for speedy delivery within your tight deadlines."
                       ];

  return (
    <section className="about-section">
      <h2 className="about-heading">About Us</h2>
        <div className="about-content">
            <div className="about-left">
                <p>
                    Your Trusted Partner for Superior Printing Services
                </p>
            </div>

            <div className="about-right">
                <p>
                    We are committed to providing our customers with the highest quality printing services at competitive prices.
                </p>
                <button className="learn-more-btn">Learn More</button>
            </div>
        </div>
        <div className='image-container'>
            {images.map((image, index) => (
                <div key={index} className="image-card">
                    <span>
                        <img src={image} alt={`feature-${index}`} className="image-tag" />
                    </span>
                    <h2 className='title'>
                        {headings[index]}
                    </h2>
                    <p className='paragraph'>
                        {paragraphs[index]}
                    </p>
                    <div className='learn-more-arrow'>
                        <span className='learn-more'>Learn More</span>
                        <img src={arrow} alt="icon" className='arrow-img'/>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default About;
