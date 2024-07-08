import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import HeroBanner from './components/HeroBanner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import './App.css';

const App = () => {
  return (
    <Router> 
      <div className="app">
        <HeroBanner />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
