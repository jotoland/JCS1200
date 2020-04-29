import React, { Component } from 'react';
import './main-page.css';
import Header from "./header";

class App extends Component() {
  render(){

    return (
      <div className="container">
        <Header subtitle="Providing Houses World Wide"/>
      </div>
    );
  }
}

export default App;
