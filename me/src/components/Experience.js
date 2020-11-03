import React, { Component } from 'react';
import ColoredLine from './ColoredLine';

class Experience extends Component {
    render() {
        return(
            <div id="ExperienceSection">
                <section class="section is-medium">
                <div class="container">
                <div class="columns is-centered">
                    <div class="column is-three-quarters">
                        <h1 class="title">Experience</h1>
                         <ColoredLine />
                        <div class="columns is-centered">
                            <div class="columnn is-half">
                                <div class="box" id="exp1">
                                    <div class="content">
                                        <article class="media">
                                        <p>
                                            <strong>Job title goes here</strong> <medium>Company name goes here</medium><br />
                                            <small>September 2020 - Present</small><br />
                                            <ul>
                                                <li>Job skills one</li>
                                                <li>Job skills two</li>
                                                <li>Job skills three</li>
                                            </ul>
                                        </p>
                                        </article>
                                    </div>
                                </div>
                                <div class="box" id="exp2">
                                    <div class="content">
                                        <article class="media">
                                        <p>
                                            <strong>Job title goes here</strong> <medium>Company name goes here</medium><br />
                                            <small>September 2020 - Present</small><br />
                                            <ul>
                                                <li>Job skills one</li>
                                                <li>Job skills two</li>
                                                <li>Job skills three</li>
                                            </ul>
                                        </p>
                                        </article>
                                    </div>
                                </div>
                                <div class="box" id="exp3">
                                    <div class="content">
                                        <article class="media">
                                        <p>
                                            <strong>Job title goes here</strong> <medium>Company name goes here</medium><br />
                                            <small>September 2020 - Present</small><br />
                                            <ul>
                                                <li>Job skills one</li>
                                                <li>Job skills two</li>
                                                <li>Job skills three</li>
                                            </ul>
                                        </p>
                                        </article>
                                    </div>
                                </div>
                                <div class="box" id="exp4">
                                    <div class="content">
                                        <article class="media">
                                        <p>
                                            <strong>Job title goes here</strong> <medium>Company name goes here</medium><br />
                                            <small>September 2020 - Present</small><br />
                                            <ul>
                                                <li>Job skills one</li>
                                                <li>Job skills two</li>
                                                <li>Job skills three</li>
                                            </ul>
                                        </p>
                                        </article>
                                    </div>
                                </div>
                                <div class="box" id="exp5">
                                    <div class="content">
                                        <article class="media">
                                        <p>
                                            <strong>Job title goes here</strong> <medium>Company name goes here</medium><br />
                                            <small>September 2020 - Present</small><br />
                                            <ul>
                                                <li>Job skills one</li>
                                                <li>Job skills two</li>
                                                <li>Job skills three</li>
                                            </ul>
                                        </p>
                                        </article>
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

export default Experience;