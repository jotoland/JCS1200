import React from 'react';
import SearchResultsRows from './seach-results-row';
const SearchResults = (props) => {
    
    //create rows of houses (list view)
    const houseRows = props.filteredHouses.map(h =>
        <SearchResultsRows key={h.id.tostring()} house={h}
            setActiveHouse={props.setActiveHouse}/>);
    //render rows of houses to the screen
    return(
      <div className="mt-2">
          <h4>Results for {props.country}:</h4>
          <table className="table table=hover">
                <tbody>
                    {houseRows}
                </tbody>
              </table>
      </div>  
    );
}   

export default SearchResults;