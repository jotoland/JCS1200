import React, { Component } from 'react';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';

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
      this.determineUniqueCountries();
    })
  }

  filterHouses =(country) => {
    this.setState({
      activeHouse: null
    });
    let filteredHouses = this.allHouses.fliter((h) => h.country === country );
    this.setState({
      filteredHouses,
      country
    }, () => console.log('new flitered house list = ', filteredHouses))
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

setActiveHouse =(house) => {
  this.setState({
    activeHouse: house
  })
}
  render(){

    return (
      <div className="container">
        <Header subtitle="Providing Houses Worldwide"/>
        <HouseFilter countries={this.state.countries} filterHouses={this.filterHouses} />
        <FeaturedHouse house={this.state.featuredHouse} />
      </div>
    );
  }
}

export default App;
