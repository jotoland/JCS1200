import React from 'react';

const SearchResultsRow = (props) => {
    // called by onClick
    const setActive = (e) => {
        e.preventDefault();
        // call to parent component function (setActiveHouse) to set the Active house
        props.setActiveHouse(props.house);
    };
    // return house data in form of rows
    return <tr onClick={setActive}>
        <td>{props.house.address}</td>
        <td>{props.house.price}</td>
        <td>{props.house.likes}</td>
    </tr>
};

export default SearchResultsRow;