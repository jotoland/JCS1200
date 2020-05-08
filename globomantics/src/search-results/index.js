import React from 'react';
import SearchResultsRow from './search-results-row';

const SearchResults = (props) => {
    
    // create rows of houses (list view)
    const houseRows = props.filteredHouses.map(h =>
        <SearchResultsRow key={h.id.toString()} house={h}
            setActiveHouse={props.setActiveHouse} />);
    // render the rows of houses to the screen
    return (
        <div className="mt-2">
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