// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Footer from './components/Footer';
// import About, etc., if you have them

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            {/* <About /> if you like */}
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
