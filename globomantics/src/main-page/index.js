import React, { Component } from 'react';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';

class App extends Component {

  state = {}

  componentDidMount(){
    this.fetchHouses();
  }

  fetchHouses = () => {
    // mock ajax call 
    fetch('/houses.json')
    .then(rsp => rsp.json())
    .then(allHouses => {
      this.allHouses = allHouses;
      this.determineFeaturedHouse();
    })
  }

  determineFeaturedHouse = () => {
    if(this.allHouses){
      let randomIndex = Math.floor(Math.random()*this.allHouses.length);
      let featuredHouse = this.allHouses[randomIndex];
      this.setState({
        featuredHouse
      });
    }
  }
  
  determineUniqueCountries = () => {
   const countries = this.allHouses
    ? Array.from(new Set(this.allHouses.map(h => h.country)))
    : [];
    countries.unshift(null);
    this.setState({
      countries
    });
  }

  render(){

    return (
      <div className="container">
        <Header subtitle="Providing Houses Worldwide"/>
        <FeaturedHouse house={this.state.featuredHouse} />
      </div>
    );
  }
}

export default App;
