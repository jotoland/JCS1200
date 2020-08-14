import React from 'react';
import AboutMe from './components/AboutMe';
import Main from './components/Main';
import Navbar from'./components/Navbar';
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
