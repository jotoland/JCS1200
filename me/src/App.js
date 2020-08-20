import React from 'react';
import AboutMe from './components/AboutMe';
import Main from './components/Main';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Main />
      <Navbar />
      <AboutMe />          
    </div>
  );
}

export default App;
