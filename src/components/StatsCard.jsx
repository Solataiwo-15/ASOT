import React from 'react';
import './Stats.css';

const StatCard = ({ number, label }) => {
  return (
    <div className="stat-card">
      <h3 className="stat-number">{number}</h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};

export default StatCard;
