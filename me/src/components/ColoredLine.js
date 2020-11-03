import React from 'react'

const Coloredline = ({color}) => (
    <hr 
       style={{
           Color: color,
           backgroundColor: "#221b2d",
           height: 4 
       }}
    />
);

export default  Coloredline;


