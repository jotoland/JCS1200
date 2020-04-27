import React, { Component } from 'react';
import './main-page.css';
import Header from './header';

// class component named "App"
class App extends Component () {

  // required render method
  render () {
    return (
      <div className="container">
        <Header subtitle="Providing Houses World Wide!"/>
      </div>
    );
  }
}

// export the App Component to use 
export default App;
