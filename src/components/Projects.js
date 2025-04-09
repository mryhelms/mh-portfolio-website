// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css';

function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "ChoanoWorld",
            description: "A fully immersive website to explore the world of choanoflagellates. Discover our closest known unicellular living relative and find out how they can help us learn our evolutionary history.",
            image: "/path/to/image1.jpg",
            category: "web",
            tags: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            id: 2,
            title: "Tir Book App",
            description: "An app companion for when you are reading a physical book. Look up words, remember great passages and so much more. A little guide while you get lost in another world.",
            image: "/path/to/image2.jpg",
            category: "mobile",
            tags: ["React Native", "Firebase"],
            link: "#"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A modern responsive portfolio website built with React and styled with CSS. Features smooth animations and a clean, minimalist design.",
            image: "/path/to/image3.jpg",
            category: "web",
            tags: ["React", "CSS", "Framer Motion"],
            link: "#"
        },
        {
            id: 4,
            title: "Weather Dashboard",
            description: "A beautiful weather application that provides real-time weather data and forecasts. Features include location search, favorites, and detailed weather metrics.",
            image: "/path/to/image4.jpg",
            category: "web",
            tags: ["JavaScript", "Weather API", "CSS"],
            link: "#"
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <p className="section-subtitle">A selection of my recent work</p>

                <div className="project-filters">
                    <button
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('web')}
                    >
                        Web
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('mobile')}
                    >
                        Mobile
                    </button>
                </div>

                <div className="project-grid">
                    {filteredProjects.map(project => (
                        <div className="project-card" key={project.id}>
                            <div className="project-img">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.link} className="project-link">View Project</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;