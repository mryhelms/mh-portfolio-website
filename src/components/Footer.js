// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Matt Helms. All rights reserved.</p>
            <p>
                <a href="mailto:mryanhelms@gmail.com">Email</a> |
                <a href="https://github.com/yourusername"> GitHub</a> |
                <a href="https://linkedin.com/in/matthew-helms-409b28153"> LinkedIn</a>
            </p>
        </footer>
    );
}

export default Footer;

