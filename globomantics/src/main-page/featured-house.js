import React from 'react';
// imr + tab
import House from '../house';

// sfc + tab (statless functiona component)
const FeaturedHouse = (props) => {
    // console log example
    console.log('[ello]: Featured house loaded');
    if (props.house) return (
        <div>
            <div className="row featuredHouse">
                <h3 className="col-md-12 text-center">
                    Featured house
                </h3>
            </div>
            <House house={props.house} />
        </div>)
    return (<div>No featured house at this time</div>)
}
 
export default FeaturedHouse;