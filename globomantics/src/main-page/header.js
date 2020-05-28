import React from 'react';
import logo from './GloboLogo.png';

// function component named "Header" returns JSX only
const Header = (props) => (
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col-md-7 mt-5 subtitle">
            {/* using props in this function */}
            {props.subtitle}
        </div>
    </header>
);

// export the function
export default Header;