// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>MG</h2>
                        <p>Developer · Designer · Writer</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-nav">
                            <h3>Navigation</h3>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-social">
                            <h3>Follow Me</h3>
                            <div className="social-icons">
                                <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Matthew Garcia-Helms. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;