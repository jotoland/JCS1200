import React from 'react';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Skills from './components/Skills'
import Experience from './components/Experience';
import Education from './components/Education';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Main />
      <AboutMe /> 
      <Navbar /> 
      <Skills /> 
      <Experience />       
      <Education />
    </div>
  );
}

export default App;
