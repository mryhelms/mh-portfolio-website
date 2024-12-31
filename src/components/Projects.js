// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <section className="projects" id="projects">
            <h1 className="section-title">My Work</h1>
            <h2 className="section-description">A collection of my current and past projects.</h2>
            <div className="project-list">
                <div className="project-item">
                    <img src="/path/to/image1.jpg" alt="Project 1" />
                    <div className="project-description">
                        <h3>ChoanoWorld</h3>
                        <p>A fully immersive website to explore the world of choanoflagellates. Discover our closest known unicellular living relative and find out how they can help us learn our evolutionary history.</p>
                    </div>
                </div>

                <div className="project-item">
                    <img src="/path/to/image2.jpg" alt="Project 2" />
                    <div className="project-description">
                        <h3>Tir Book App: For the lover of physical books</h3>
                        <p>An app companion for when you are reading a physical book. Look up words, remember great passages and so much more. A little guide while you get lost in another world.</p>
                    </div>
                </div>
                {/* Add more items */}
            </div>
        </section>
    );
}

export default Projects;
