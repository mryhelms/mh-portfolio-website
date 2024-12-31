// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="site-header">
            <div className="logo"></div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
