import React from 'react';
import AboutMe from './components/AboutMe';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Main />
      <Navbar />
      <AboutMe />
      <Skills />          
    </div>
  );
}

export default App;
