// src/components/About.js
import React from 'react';
import './About.css';

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Here's a bit about who I am and what I do</p>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hello! I'm Matthew, a passionate developer and designer with a love for creating
                            elegant, user-friendly, and impactful digital solutions.
                        </p>
                        <p>
                            My journey in tech began over 5 years ago, and since then,
                            I've worked on projects ranging from responsive websites to
                            interactive web applications, always focusing on delivering exceptional user experiences.
                        </p>
                        <p>
                            I specialize in front-end development with expertise in React, JavaScript, and modern CSS,
                            but I'm also comfortable working with back-end technologies when needed.
                        </p>

                        <div className="skills">
                            <h3>Skills & Technologies</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">TypeScript</span>
                                <span className="skill-tag">HTML5/CSS3</span>
                                <span className="skill-tag">Node.js</span>
                                <span className="skill-tag">UI/UX Design</span>
                                <span className="skill-tag">Responsive Design</span>
                                <span className="skill-tag">Git</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-image">
                        <img src="/profilephoto.jpg" alt="Matthew Garcia-Helms" />

                        <div className="about-stats">
                            <div className="stat">
                                <h4>5+</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat">
                                <h4>50+</h4>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stat">
                                <h4>15+</h4>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;