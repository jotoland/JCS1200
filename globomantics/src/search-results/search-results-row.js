import React from 'react';


const SearchResultsRow = (props) => {
    const setActive = (e) => {
        e.preventDefualt();
        // Call to parent component function
        props.setActiveHouse(props.house);    
    };
    // return house data in form of row
    return (
        <tr onClick={setActive}>
            <td>{props.house.address}</td>
            <td>{props.house.price}</td>
            <td>{props.house.likes}</td>
        </tr>
    );
}

export default SearchResultsRow;