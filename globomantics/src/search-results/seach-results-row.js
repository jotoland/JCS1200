import React from 'react';

const SearchResultsRow =(props) => {
   const setActive =(e) =>{
    e.preventDefault();
    //call to parent compomet function
    props.setActiveHouse(props.house);
   };
   //return house data in form of a row
   return (
        <tr onClick={setActive}>
            <td>{props.house.address}</td>  
            <td>{props.house.price}</td>  
            <td>{props.house.likes}</td>  
        </tr>
   );
}

export default SearchResultsRow; 