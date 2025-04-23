//// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally send the data to a server
        // This is just a simulation
        setFormStatus({
            submitted: true,
            error: false,
            message: 'Thank you! Your message has been sent successfully.'
        });

        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });

        // Reset status after 5 seconds
        setTimeout(() => {
            setFormStatus({
                submitted: false,
                error: false,
                message: ''
            });
        }, 5000);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Have a question or want to work together?</p>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-card">
                            <div className="contact-icon">
                                <i className="far fa-envelope"></i>
                            </div>
                            <h3>Email</h3>
                            <p>mryanhelms@gmail.com</p>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <h3>Phone</h3>
                            <p>+1 (317) 431-8255</p>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h3>Location</h3>
                            <p>San Francisco, CA</p>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-link">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="social-link">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="social-link">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            {formStatus.message && (
                                <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                                    {formStatus.message}
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;