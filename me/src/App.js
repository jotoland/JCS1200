import React from 'react';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Skills from './components/Skills'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Main />
      <AboutMe /> 
      <Navbar /> 
      <Skills />        
    </div>
  );
}

export default App;
