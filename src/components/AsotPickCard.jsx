import React from 'react';
import './AsotPicks.css';

const ProductCard = ({ image, title, discount, bgColor }) => {
  return (
    <div className="product-card">
      <div className="product-image-box" style={{ backgroundColor: bgColor }}>
        {discount && <span className="product-badge">{discount}</span>}
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <p className="product-title">{title}</p>
        <span className="arrow">→</span>
      </div>
    </div>
  );
};

export default ProductCard;
