import React from 'react';
import './WhyUs.css';
import thumbsUp from '../assets/thumbsUp.png';
import ImgBox from '../assets/ImgBox.png';

function WhyUs () {

    const titles = ["Uncompromising Quality", "Extensive Range of Services", "Personalized Approach"]
    const descriptions = ["We prioritize quality by meticulously crafting our products and services. Cutting-edge technologies and strict quality control ensure you get the best value.", 
                           "We cover all your needs with a wide range of services. From design to branding, our experts tackle any project, big or small, to make your vision a reality.", 
                           "Your needs are our priority. We customize our services to perfectly match your goals, ensuring you get exactly what you want."
                        ]

    return (
        <section className="whyus-section">
            <div className="whyus-left">
                <h2 className="whyus-heading">
                    Why Choose Us
                </h2>
                <h2 className="whyus-title">
                    Experience Excellence Service
                </h2>
                <p className="whyus-desc">
                    At Asot, we are committed to providing our customers with an unparalleled experience that exceeds expectations. Our team of dedicated professionals is passionate about delivering exceptional service, ensuring that your needs are met with the utmost care and attention.
                </p>
                {titles.map((title, index) => (
                    <div className="whyus-card">
                        <div className="whyus-box">
                            <img src={thumbsUp} alt="thumbs-up" />
                        </div>
                        <div className="text-box">
                            <h3>{title}</h3>
                            <p>{descriptions[index]}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="whyus-right">
                <img src={ImgBox} alt="Why Asot Visual"  className='whyus-img'/>
            </div>
        </section>
    );
}
 
export default WhyUs;
