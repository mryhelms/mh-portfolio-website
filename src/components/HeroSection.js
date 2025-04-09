// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="fade-in">Matthew Garcia-Helms</h1>
                    <h2 className="fade-in">Developer | Designer | Writer</h2>
                    <p className="fade-in">I create beautiful, functional, and user-friendly digital experiences.</p>
                    <div className="hero-btns fade-in">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Get In Touch</a>
                    </div>
                </div>

                <div className="hero-image fade-in">
                    <div className="profile-img-wrapper">
                        <img src="/profilephoto.png" alt="Matthew Garcia-Helms" className="profile-img" />
                    </div>
                </div>
            </div>

            <div className="scroll-down">
                <a href="#about">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
        </section>
    );
}

export default HeroSection;