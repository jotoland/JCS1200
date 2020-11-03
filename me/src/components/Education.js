import React, { Component } from 'react';
import ColoredLine from './ColoredLine';

class Education extends Component {

    // this draws to the screen
    render(){
        return(
            <div id="educationSection">
                <section class="section is-large">
                    <div class="container">
                        <div class="columns is-center">
                         <div class="column is three-quaters" id="edu1">
                             <h1 class="title">Education</h1>
                             <ColoredLine />
                             <h2 class="subtitle">Name of school goes here</h2>
                             <div class="columns is-centered">
                                <p> Optional: name of specialty <span class="blullet"></span>Name of degree goes here</p>
                             </div>
                             <div class="columns is-centered">
                                <p>Graduated: may of 2017</p>
                                 
                             </div>
                         </div>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


export default Education;
