import React, { Component } from 'react';
import ProfilePic from '../images/profilepic.jpg';

class AboutMe extends Component {
    render() {
        return(
            <div id="AboutSection">
                <section class="section is-medium">
                    <div class="container">
                        <div class="columns is-centered">
                            <div class="column is-three-quarters">
                                <h2 class="title">About Me</h2>
                                {/*insert colored line here*/}
                                <div class="columns is-8 is-three-quarters">
                                    <figure class="image is-4by4">
                                        <img src={ProfilePic} alt=""/>
                                    </figure>
                                </div>
                                <div class="column" id="Intro">
                                    <p>
                                    Hello, My name is John G. Toland. I am currently a Full Stack Software Engineer at Reed Group a Gaurdian Company. 
                                    My experience includes, but not limited to, front-end
                                    web development, UI design, application interface development, 
                                    and data management. I enjoy the everyday challenge and problem
                                    solving opportunities that push me to continue learning about 
                                    software development.   
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