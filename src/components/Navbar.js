// src/components/Navbar.js
import React from 'react';

function Navbar() {
    return (
        <nav style={styles.nav}>
            <h1 style={styles.logo}>My Portfolio</h1>
            <ul style={styles.navList}>
                <li><a href="#about" style={styles.navLink}>About</a></li>
                <li><a href="#projects" style={styles.navLink}>Projects</a></li>
                <li><a href="#contact" style={styles.navLink}>Contact</a></li>
            </ul>
        </nav>
    );
}

const styles = {
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#212121', // dark gray
    },
    logo: {
        margin: 0,
        fontSize: '1.5rem',
        color: '#ffffff',
        fontWeight: 600, // a bit bolder
    },
    navList: {
        display: 'flex',
        listStyle: 'none',
        gap: '1.5rem',
        margin: 0,
    },
    navLink: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: 400,
        transition: 'color 0.2s ease',
    },
};

// Using a pseudo-class hover in inline styles is not straightforward.
// We can cheat by using an event or switch to CSS classes. 
// For demonstration, let's do a quick "hover" style via a separate approach below:

export default Navbar;
