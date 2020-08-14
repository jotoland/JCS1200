import React from 'react';
import Name from '../images/name-logo.png';

function Main() {
    return(
        <div className="name">
            <section class="hero is-fullheight-with-navbar" id="main">
            <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-one-third">
                        <figure class="image is-588x224">
                            <img src={Name} alt=""></img>
                        </figure>
                    </div>
                </div>
            </div>
            </div>
            </section>
        </div>
    );
}

export default Main;