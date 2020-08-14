import React from 'react';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Main />
      <AboutMe /> 
      <Navbar />         
    </div>
  );
}

export default App;
