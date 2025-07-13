import React from 'react';
import './OurServices.css';
import OurServiceCard from './OurServiceCard';
import img1 from '../assets/dkcouture.png';
import img2 from '../assets/stranerd.png';
import img3 from '../assets/bsec.png';
import img4 from '../assets/flagmockup.png';
import img5 from '../assets/codeavour.png';
import img6 from '../assets/WeddingIV.png';

const serviceData = [
  {
    image: img1,
    title: "Packaging Solutions :",
    description: [
        "Custom Boxes",
        "Custom Packaging",
        "Labels and Stickers",
        "Tags and Hangings"
    ],
    buttonText: "Details"
  },
  {
    image: img2,
    title: "Promotional Items :",
    description: [
        "Pens and Stationery",
        "Mugs and Drinkware",
        "Keychains and Accessories",
        "Custom Apparel"
    ],
    buttonText: "Details"
  },
  {
    image: img3,
    title: "Marketing Materials :",
    description: [
        "Brochures and Flyers",
        "Postcards and Mailers",
        "Door Hangers",
        "Catalogs and Booklets"
    ],
    buttonText: "Details"
  },
  {
    image: img4,
    title: "Banners and Signage :",
    description: [
        "Vinyl Banners",
        "Retractable Banners",
        "Posters",
        "Yard Signs"
    ],
    buttonText: "Details"
  },
  {
    image: img5,
    title: "Business Essentials :",
    description: [
        "Business Cards",
        "Letterheads and Envelopes",
        "Notepads",
        "Presentation Folders"
    ],
    buttonText: "Details"
  },
  {
    image: img6,
    title: "Special Occasions :",
    description: [
        "Invitations and RSVP Cards",
        "Event Tickets",
        "Announcements",
        "Greeting Cards"
    ],
    buttonText: "Details"
  }
];

function OurServices () {
  return (
    <section className="services-section">
      <h1 className="services-label">Our Services</h1>
      <h2 className="services-title">Your One-Stop Printing Solution</h2>
      <h2 className="services-title">Explore Our Services</h2>
      <p className="services-desc">
        We offer a complete range of printing services, from business cards to banners.  State-of-the-art technology and expertise ensure top quality results for all your printing needs.
      </p>

      <div className="services-grid">
        {serviceData.map((service, index) => (
          <OurServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
