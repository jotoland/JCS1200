import React, { Component } from 'react';
import ColoredLine from './ColoredLine';
// need to import our images

class Portfolio extends Component {
    render(){
        return(
            <div id="PortfolioSection">
                <section class="section is-medium">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-three-quarters">
                            <h1 class="title">Portfolio</h1>
                            <ColoredLine color="grey"/>
                            <div class="columns is-centered">
                                <div class="column">
                                {/** tiles start here --> ancester/parent/child heirarchy */}
                                <div class="tile is-ancestor">
                                    <div class="tile is-parent">
                                        <article class="tile is-child box">
                                        <h2 class="subtitle">Project 1: tile goes here</h2>
                                        <p class="subtitle">Description goes here</p>
                                            <figure class="image is-1by1">
                                                <a href="">
                                                    <br />
                                                    <img
                                                        alt=""
                                                        src="" 
                                                    />
                                                </a>
                                            </figure>
                                        </article>
                                    </div>
                                    <div class="tile is-parent">
                                        <article class="tile is-child box">
                                        <h2 class="subtitle">Project 2: tile goes here</h2>
                                        <p class="subtitle">Description goes here</p>
                                            <figure class="image is-1by1">
                                                <a href="">
                                                    <br />
                                                    <img
                                                        alt=""
                                                        src="" 
                                                    />
                                                </a>
                                            </figure>
                                        </article>
                                    </div>
                                    <div class="tile is-parent">
                                        <article class="tile is-child box">
                                        <h2 class="subtitle">Project 3: tile goes here</h2>
                                        <p class="subtitle">Description goes here</p>
                                            <figure class="image is-1by1">
                                                <a href="">
                                                    <br />
                                                    <img
                                                        alt=""
                                                        src="" 
                                                    />
                                                </a>
                                            </figure>
                                        </article>
                                    </div>
                                </div>
                                {/** 2nd tile starts here */}
                                <div class="tile is-ancestor">
                                    <div class="tile is-parent">
                                        <article class="tile is-child box">
                                        <h2 class="subtitle">Project 4: tile goes here</h2>
                                        <p class="subtitle">Description goes here</p>
                                            <figure class="image is-1by1">
                                                <a href="">
                                                    <br />
                                                    <img
                                                        alt=""
                                                        src="" 
                                                    />
                                                </a>
                                            </figure>
                                        </article>
                                    </div>
                                    <div class="tile is-parent">
                                        <article class="tile is-child box">
                                        <h2 class="subtitle">Project 5: tile goes here</h2>
                                        <p class="subtitle">Description goes here</p>
                                            <figure class="image is-1by1">
                                                <a href="">
                                                    <br />
                                                    <img
                                                        alt=""
                                                        src="" 
                                                    />
                                                </a>
                                            </figure>
                                        </article>
                                    </div>
                                    <div class="tile is-parent">
                                        <article class="tile is-child box">
                                        <h2 class="subtitle">Project 6: tile goes here</h2>
                                        <p class="subtitle">Description goes here</p>
                                            <figure class="image is-1by1">
                                                <a href="">
                                                    <br />
                                                    <img
                                                        alt=""
                                                        src="" 
                                                    />
                                                </a>
                                            </figure>
                                        </article>
                                    </div>
                                </div>
                                {/** tiles stop here --> ancester/parent/child heirarchy */}
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

export default Portfolio;