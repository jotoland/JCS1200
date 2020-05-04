import React from 'react';

const FeaturedHouse = (props) => {
    if(props.house){

        return (
            <div>
                <div className="row featuredHouse">
                    <h3 className="col-md-12 text-center">
                        Featured house 
                    </h3>
                </div>
            </div>
          );
    }else{
        return(<div>No Featured House at This Time</div>);
    }
}
 
export default FeaturedHouse;