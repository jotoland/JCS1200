import React from 'react';
import House from '../house';

const FeaturedHouse = (props) => {

console.log('hello- Featured House');

    if(props.house){
        return (
            <div>
                <div className="row featuredHouse">
                    <h3 className="col-md-12 text-center">
                        Featured house
                    </h3>
                </div>
                <House house={props.house} />
            </div>
          );
    }else{
        return(<div>No Featured House At This Time</div>);
    }
}
 
export default FeaturedHouse;