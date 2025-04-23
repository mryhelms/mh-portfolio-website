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
                            Hello! I'm Matthew, a passionate developer and designer who loves crafting elegant, user-friendly, and impactful digital experiences.
                        </p>
                        <p>
                            My journey in tech began over five years ago. Since then, I've worked professionally on integrating complex systems, building robust API integrations, and automating time-consuming manual processes. On the side, I create interactive experiences and websites that help academics and artists share their work with a wider audience.
                        </p>
                        <p>
                            I specialize in backend development with the .NET framework in C#, and I build responsive, dynamic frontends using JavaScript and modern frameworks.
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