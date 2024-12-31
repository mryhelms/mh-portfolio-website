// HeroSection.js
import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Matthew Garcia-Helms</h1>
                <h2>Developer / Designer / Writer</h2>
            </div>

            {/* The image is placed to the side */}
            <div className="hero-image-wrapper">
                <img
                    src="/profilephoto.png"
                    alt="Matthew Garcia-Helms"
                    className="hero-photo"
                />
            </div>
            <div className="wave-divider">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,208C672,203,768,181,864,154.7C960,128,1056,96,1152,117.3C1248,139,1344,213,1392,250.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
        </section>
    );
}

export default HeroSection;
