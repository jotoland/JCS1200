import React from 'react';
import SearchResultsRow from './search-results-row';

const SearchResults = (props) => {
  // variable component (used since we need to create an array of components)
  // map returns an array of Rows
  const houseRows = props.filteredHouses.map(h => 
    // key is requried for the array of rows to render in table
    <SearchResultsRow key={h.id.toString()} house={h} 
        setActiveHouse={props.setActiveHouse} />);

  // render the house rows in a table
  return (
    <div className="mt-2" >
      <h4>Results for {props.country}:</h4>
      <table className="table table-hover">
        <tbody>
          {houseRows}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
