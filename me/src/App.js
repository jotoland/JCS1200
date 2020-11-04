import React from 'react';
import AboutMe from './components/AboutMe';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Main />
      <Navbar />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <ContactMe />
      <Footer />     
    </div>
  );
}

export default App;
