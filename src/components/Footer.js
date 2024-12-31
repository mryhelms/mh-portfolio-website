// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Matt Helms. All rights reserved.</p>
            <p>
                <a href="mailto:youremail@example.com">Email</a> |
                <a href="https://github.com/yourusername"> GitHub</a> |
                <a href="https://linkedin.com/in/yourusername"> LinkedIn</a>
            </p>
        </footer>
    );
}

export default Footer;

