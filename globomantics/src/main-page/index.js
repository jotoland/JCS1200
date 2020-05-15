import React, { Component } from 'react';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import HouseDetail from '../house';

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

  filterHouses = (country) => {
    this.setState({
     activeHouse: null 
    });
    let filteredHouses = this.allHouses.filter((h) => h.country === country);
    this.setState({
      filteredHouses, 
      country
    }, () => console.log('new filtered house list = ', filteredHouses))
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

setActiveHouse = (house) => {
  this.setState({
    activeHouse: house
  })
}  

  render(){
    let activeComponent = null;
    //if country is selected display search results
    if (this.state.country){
    activeComponent = <SearchResults country={this.state.country}
                        filteredHouses={this.state.filteredHouses}
                        setActiveHouse={this.setActiveHouse}/>
    }
    //if active house is not null then display house detail
    if (this.state.activeHouse){
      activeComponent= <HouseDetail house={this.state.activeHouse}/>
    }
    //if active component is null display featured house
    if (!activeComponent){
      activeComponent = <FeaturedHouse house={this.state.featuredHouse}/>
    }

    return (
      <div className="container">
        <Header subtitle="Providing Houses Worldwide"/>
        <HouseFilter countries={this.state.countries} filterHouses={this.filterHouses} />
        {activeComponent}
      </div>
    );
  }
}

export default App;
