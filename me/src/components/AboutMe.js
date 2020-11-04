import React, { Component } from 'react';
//import ProfilePic from '../images/profilepic.jpg';
import ColoredLine from'./ColoredLine';
class AboutMe extends Component {
    render () {
        return(
            <div id="AboutSection">
            <section class="section is-medium">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-three-quarters">
                            <h2 class="title">About Me</h2>
                            <ColoredLine />
                            <div class="colimns is-8 is-three-quarters">
                                <figure class="image is-1byl">
                                    <img  src="" alt=""/>

                                </figure>

                            </div>
                            <div class="column" id="Intro">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.   
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