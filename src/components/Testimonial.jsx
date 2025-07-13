import React from 'react';
import './Testimonial.css';
import quoteIcon from '../assets/quoteIcon.png'; // the blue quote icon
import reviewImage from '../assets/testimonial-img.png'; // placeholder image
// import stars from '../assets/stars.png'; // 5-star image

function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-left">
        <div className="testimonial-image-box">
          <img src={reviewImage} alt="review" className="main-review-img" />
          {/* <div className="rating-badge">
            <img src={stars} alt="stars" className="stars" />
            <span>4.4/5 &nbsp; • &nbsp; 3,841 Reviews</span>
          </div> */}
        </div>
      </div>

      <div className="testimonial-right">
        <h2 className="testimonial-heading">Testimonial</h2>
        <h3 className="testimonial-subtitle">High-Quality Prints</h3>
        <p className="testimonial-text">
          The printing services provided by this company delivered high-quality prints that exceeded my expectations. 
          The colors were vibrant, and the details were sharp. I highly recommend their services.
        </p>
        <p className="testimonial-author">
          Emily Johnson, <span className="job-title">Graphic Designer</span>
        </p>
        <div className="testimonial-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <img src={quoteIcon} alt="quote" className="quote-icon" />
      </div>
    </section>
  );
}

export default Testimonial;
