import React from 'react';

const FeaturedHouse = (props) => {
    if(Props.house){

        return ( 
            <div>
                <div className='row featuredHouse'>
                    <h3 className =" col-md-12 text- center">
                        Featured House
                        
                    </h3>
    
                </div>
            </div>
         );
    }else{
        return(<div>no Feathered House At This Time</div>);

    }
}
 
export default FeaturedHouse;