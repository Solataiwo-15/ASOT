import React from 'react';
import './OurServices.css';

const OurServiceCard = ({ image, title, description, buttonText }) => {
  return (
    <div className="service-card">
      <div className="service-img-box">
        <img src={image} alt={title} />
        <button className="service-btn">{buttonText}</button>
      </div>
      <div className="service-text">
        <h3>{title}</h3>
        {Array.isArray(description) ? (
            <ul className="service-list">
                {description.map((item, idx) => (
                <li key={idx}>{item}</li>
                ))}
            </ul>
            ) : (
            <li>{description}</li>
        )}
      </div>
    </div>
  );
};

export default OurServiceCard;
