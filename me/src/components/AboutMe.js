import React, { Component } from 'react';
// import ColoredLine from '../components/ColoredLine';
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
                        {/*<ColoredLine />*/}
                        <div class="columns is-8 is-three-quarters">
                            <div class="column" id="ProfilePic">
                                <figure class="image is-1by1">
                                    {/*<img src={ProfilePic} alt=""></img>*/}
                                </figure>                              
                            </div>
                            <div class="column" id="Intro">
                                <p>
                                Hello, Intro goes here 
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