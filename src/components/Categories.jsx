import React from 'react';
import './Categories.css';
import iconImg from '../assets/Icon 1.png'; 

function Categories () {
  const tags = [    "BUSINESS CARD",
                    "BROCHURE & FLYER",
                    "POSTER & BANNER",
                    "CUSTOM INVITATION",
                    "BRANDING",
                    "CATALOG & BOOKLET",
                    "PACKAGING BAGS",
                    "APPAREL PRINTING",
                    "COMPANY PACKAGE",
                ];
  

  return (
    <section className="category-section">
        <h2 className='category-header'>
            Category
        </h2>
        <div className="category-container">
            {tags.map((tag, index) => (
                <div key={index} className="tag-group">
                    <span className="category-tag">
                        {tag}
                    </span>
                    <img src={iconImg} alt="icon"  className='icon-img'/>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Categories;
