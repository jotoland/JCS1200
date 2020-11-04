import React, { Component } from 'react';
import ColoredLine from './ColoredLine';
import LinkedinLogo from '../images/LinkedinLogo.png';
import GithubLogo from '../images/GithubLogo.png';
import Marker from '../images/MapMarker.png';

class ContactMe extends Component {
    render(){
        return(
            <div id="ContactSection">
                <section class="section is-large">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-three-quarters">
                            <h1 class="title">ContactMe</h1>
                            <ColoredLine />
                            <ul id="contact-info">
                                <li>
                                    <span>
                                        <img 
                                            id="marker" 
                                            src={Marker} 
                                            alt=""
                                        >
                                        </img>
                                    </span>
                                    Currently: Colorado
                                </li>
                                <li>Email: tomas4co@yahoo.com</li>
                                <li>Cell: 806-881-9417</li>
                            </ul>
                            <div class="columns is-centered">
                                <div class=" column is-one-third">
                                    <div class=" columns is-mobile is-centered" id="social-links">
                                        <div class="column" id="githubLink">
                                            <figure class="image is-64x64">
                                                <a href="" class="image">
                                                <img src={GithubLogo} alt="" class="responsive"></img>
                                                </a>
                                            </figure>
                                        </div>
                                        <div class="column" id="linkedinLink">
                                            <figure class="image is-64x64">
                                                <a href="" class="image">
                                                <img src={LinkedinLogo} alt="" class="responsive"></img>
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
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

export default ContactMe;