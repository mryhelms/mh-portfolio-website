// src/components/About.js

import React from 'react';

function About() {
    return (
        <section id="about" style={styles.container}>
            <h2>About Me</h2>
            <img
                src="/profilephoto.jpg"
                alt="My Profile"
                className="profile-photo"
            />
            <p>
                Hello! I'm Matt H, a passionate developer. I love building modern
                and responsive web applications.
            </p>
        </section>
    );
}

const styles = {
    container: {
        padding: '1rem',
    },
};

export default About;
