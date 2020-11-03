import React, { Component } from 'react';
import ColoredLine from './ColoredLine';
// import ProfilePic from '../images/profilepic.jpg';

class AboutMe extends Component {
    render(){
        return(
            <div id="AboutSection">
                <section class="section is-medium">
                    <div class="container">
                        <div class="columns is-centered">
                            <div class="column is-three-quarters">
                                <h2 class="title">About Me</h2>
                                <ColoredLine />
                        <div class="columns is-8 is-three-quarters">
                            <div class="column" id="ProfilePic">
                                <figure class="image is-1by1">
                                    {/*<img src={ProfilePic} alt=""></img>*/}
                                </figure>                              
                            </div>
                            <div class="column" id="Intro">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum. 
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
                                    <li>Swimming</li>
                                </ul>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutMe;