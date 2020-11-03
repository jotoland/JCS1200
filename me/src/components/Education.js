import React, { Component } from 'react';
import ColoredLine from './ColoredLine';

class Education extends Component {

    // this draws to the screen
    render(){
        return(
            <div id="EducationSection">
                <section class="section is-large">
                    <div class="container">
                        <div class="columns is-centered">
                            <div class="column is-three-quarters"> id= "edu1"
                                <h1 class="title">Education</h1>
                                <ColoredLine />
                                <h2 class="subtitle">Name of school goes here</h2>
                                <div class="clomns is-centered">
                                    <p>Optional: name of specialty <span class="bullet"></span>Name of degree goes here</p>
                                </div>
                                <div class="clomns is-centered">
                                    <p>Graduated: May of 2011</p>
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