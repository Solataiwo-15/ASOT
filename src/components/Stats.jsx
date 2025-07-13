import React from 'react';
import './Stats.css';
import StatsCard from './StatsCard';

const statsData = [
  { number: '5+', label: 'Years of Experience' },
  { number: '98%', label: 'Satisfaction Rate' },
  { number: '50+', label: 'Diverse Product' },
  { number: '10K', label: 'Printing Capacity' }
];

const Stats = () => {
  return (
    <section className="stats-section">
      {/* Top Section */}
      <div className="stats-top">
        <div className="stats-left">
          <p className="stats-heading">Statistics</p>
          <h2 className="stats-title">Asot <br /> in Number</h2>
        </div>
        <div className="stats-right">
          <p className="stats-text">
            Odio at elit mauris neque nisl odio elementum viverra sollicitudin. Ante sed aliquam et duis eu mauris. Tristique quisque amet turpis sed interdum non sollicitudin vulputate mi. Interdum in et ut sed semper ornare fames.
          </p>
          <button className="stats-btn">Learn More</button>
        </div>
      </div>

      {/* Bottom Section (Stats Grid) */}
      <div className="stats-grid">
        {statsData.map((item, index) => (
          <StatsCard key={index} number={item.number} label={item.label} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
