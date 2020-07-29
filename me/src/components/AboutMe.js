import React, { Component } from 'react';

class AboutMe extends Component {
    render () {
        return(
            <div id="AboutSection">
            <section class="section is-medium">
                <div class="container">
                    <div class="colimns is-centered">
                        <div class="column is-three-quarters">
                            <h2 class="title">About Me</h2>
                            {/*insert colored line here*/}
                            <div class="colimns is-8 is-three-quarters">
                                <figure class="image is-1byl">
                                    <img  src="" alt=""/>

                                </figure>

                            </div>
                            <div class="column" id="Intro">
                                <p>
                                hello, my name is Taylor Lindsey. my intro goes here    
                                </p>

                            </div>
                            <div class="column" id="personal">
                                <h3>Hobbie of mine:</h3>
                                <br />
                                <ul>
                                    <li> Biking and Rafting</li><br/>
                                    <li> fishing and gardening</li><br/>
                                    <li> traveling and joplin</li><br/>
                                    <li> reading and crafting</li><br/>
                                    <li> climbing and camping</li><br/>
                                </ul>
                           </div>
                        </div>
                    </div>
                </div>
             </section>
            </div>
        );
    }
}

// exports the file/class
export default AboutMe; 