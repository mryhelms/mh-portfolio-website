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
        </section>
    );
}

export default HeroSection;
