import React, { Component } from 'react';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import HouseDetail from '../house';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  state = {}

  // life cycle method (runs when component is mounted / rendered)
  componentDidMount() {
    // call local fat arrow function - fetchHouses
    this.fetchHouses();
  }

  // mock ajax call to get the data
  fetchHouses = () => {
    // make mock ajax call
    fetch('/houses.json')
    .then(rsp => rsp.json())
    .then(allHouses => {
      this.allHouses = allHouses;
      this.determineFeaturedHouse();
      this.determineUniqueCountries();
    })
  }

  determineFeaturedHouse = () => {
    // if we have all the houses
    if (this.allHouses) {
      // create random index based of the count of houses in array (length of array)
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      // use that random index to get a entry in the array (grab a house)
      const featuredHouse =  this.allHouses[randomIndex];
      // set state with featuredHouse KVP (key value pair)
      this.setState({ featuredHouse });
    };
  }

  determineUniqueCountries = () => {
    // maps houses to countries
    const countries = this.allHouses
    // array of strings, distince set
      ? Array.from(new Set(this.allHouses.map(h => h.country)))
      // return empty array
      : [];
    // setting first entry to null for some reason ?
    countries.unshift(null);
    // set state with countries KVP (key value pair)
    this.setState({ countries });
  }

  filterHouses = (country) => {
    // set to null when user selects a new country
    this.setState({ activeHouse: null });
    // array of houses filtered by country name
    const filteredHouses = this.allHouses.filter((h) => h.country === country);
    // two calls to setState, boo...
    // store the value of country change and the new filteredhouses
    this.setState({ filteredHouses });
    this.setState({ country }, () => console.log('New filtered house list = ', filteredHouses));
  }

  setActiveHouse = (house) => {
    // sets state with the given house activeHouse becomes -> the value of house
    this.setState({ activeHouse: house });
  }

  render() {
    let activeComponent = null;
    // If country is selected display search results
    if (this.state.country)
    activeComponent = <SearchResults country={this.state.country}
      filteredHouses={this.state.filteredHouses} setActiveHouse={this.setActiveHouse} />;
    // if avtive house is not null then display house detail
    if (this.state.activeHouse)
      activeComponent = <HouseDetail house={this.state.activeHouse}/>;
    // if there is not an active house then display the featured house
    if (!activeComponent)
      activeComponent = <FeaturedHouse house={this.state.featuredHouse} />;
    return (
      <div className="container">
        <Header subtitle="Providing houses all over the world"/>
        <HouseFilter countries={this.state.countries} filterHouses={this.filterHouses} />
        {activeComponent}
        {/* <FeaturedHouse house={this.state.featuredHouse} /> */}
      </div>
    );
  }
}

export default App;
