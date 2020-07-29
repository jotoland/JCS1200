import React, { Component } from 'react';

class AboutMe extends Component {
    render () {
        return(
            <div id="AboutSection">
                <section class="section is-medium">
                    <div class="container">
                        <div class="columns is-centered">
                            <div class="column is-three-quarters">
                                <h2 class="title">About Me</h2>
                                {/*insert colored line here*/}
                                <div class="columns is-8 is-three-quarters">
                                    <figure class="image is-1by1">
                                        <img src="" alt=""/>
                                    </figure>
                                </div>
                                <div class="column" id="Intro">
                                    <p>
                                    My intro goes here
                                    </p>
                                </div>
                                <div class="column" id="Personal">
                                    <h3>Hobbies of mine:</h3>
                                    <br />
                                    <ul>
                                        <li>Camping and Fishing</li><br/>
                                        <li>Disc Golf</li><br/>
                                        <li>Traveling</li><br/>
                                        <li>Bike Riding</li><br/>
                                        <li>Swimming</li><br/>
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
