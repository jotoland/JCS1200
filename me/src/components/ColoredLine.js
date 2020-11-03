import React from 'react';

const ColoredLine = ({color}) => (
    <hr
        style={{
            color: color,
            backgroundColor: "#221b2d",
            height: 4
        }} 
    />
);

export default ColoredLine;