import React from 'react';
import './AsotPicks.css';
import AsotPickCard from './AsotPickCard';

import tshirt from '../assets/tshirts.png';
import card from '../assets/cards.png';
import stationary from '../assets/stationary.png';
import hat from '../assets/hats.png';
import sticker from '../assets/stickers.png';

const productData = [
  { image: tshirt, title: 'T-shirts', bgColor: '#888888' },
  { image: card, title: 'Business Cards', discount: '15% off', bgColor: '#847E8C' },
  { image: stationary, title: 'Stationary', bgColor: '#A2BFF0' },
  { image: hat, title: 'Hats', discount: '30% off', bgColor: '#E5B711' },
  { image: sticker, title: 'Stickers', bgColor: '#797979' }
];

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-top">
        <div className="products-header">
          <h2>Asot Picks<span className="colon"> :</span></h2>
          <p>Popular Product. Unbeatable Value.</p>
        </div>
        <button className="see-all-btn">See All</button>
      </div>

      <div className="products-grid">
        {productData.map((item, index) => (
          <AsotPickCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
