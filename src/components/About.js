// src/components/About.js
import React from 'react';
import './About.css';

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Salut! I'm Matt GH, a passionate developer and designer who loves crafting elegant, user-friendly, and impactful digital experiences.
                        </p>
                        <p>
                            My journey in tech began as a kid when I ripped apart my family's computer to see how it works. My skills progressed towards the less destructive when I started building out websites as a teenager. Later on my professional work had me focus on backend work and I've worked professionally on integrating complex systems, building robust API integrations, and automating time-consuming manual processes. On the side, I create interactive experiences and websites that help academics and artists share their work with a wider audience.
                        </p>
                        <p>
                            I specialize in backend development with the .NET framework in C#, and I build responsive, dynamic frontends using JavaScript and modern frameworks.
                        </p>

                        <div className="skills">
                            <h3>Skills & Technologies</h3>
                            <div className="skill-categories">
                                <div className="skill-category">
                                    <h4>Modern Frontend</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag primary">React</span>
                                        <span className="skill-tag primary">TypeScript</span>
                                        <span className="skill-tag primary">Next.js</span>
                                        <span className="skill-tag">Redux/Zustand</span>
                                        <span className="skill-tag">Performance Optimization</span>
                                        <span className="skill-tag">Jest/Testing</span>
                                        <span className="skill-tag">CSS-in-JS</span>
                                        <span className="skill-tag">Accessibility</span>
                                        <span className="skill-tag">Responsive Design</span>
                                    </div>
                                </div>

                                <div className="skill-category">
                                    <h4>Professional Experience</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag secondary">C#</span>
                                        <span className="skill-tag secondary">.NET Framework</span>
                                        <span className="skill-tag secondary">Azure</span>
                                        <span className="skill-tag">REST APIs</span>
                                        <span className="skill-tag">CI/CD</span>
                                        <span className="skill-tag">Git</span>
                                    </div>
                                </div>
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
                                <h4>&#x221E;+-</h4>
                                <p>Completed and Ongoing Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;