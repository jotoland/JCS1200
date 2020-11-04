import React, { Component } from 'react';
import ColoredLine from './ColoredLine';
// need to import images 

class Portfolio extends Component {
    render(){
        return(
            <div id="PortfolioSection">
                <section class="sectipon is-medium">
                    <div class="container">
                        <div class="columns is-centered">
                            <div class="column is-3-quarters">
                                <h1 class="title">Portfolio</h1>
                                <ColoredLine color="grey"/>
                                <div class="columns is-centered">
                                    <div class="column">
                                    {/** tiles start here --> ancester/parent/childheirarchy */}
                                    <div class="tile is-ancester">
                                        <div class="tile is-parent">
                                            <article class="tile is-child box">
                                            <h2 class="subtitle">Project 1: title goes here</h2>
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
                                            <h2 class="subtitle">Project 2: title goes here</h2>
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
                                            <h2 class="subtitle">Project 3: title goes here</h2>
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
                                    <div class="tile is-ancester">
                                        <div class="tile is-parent">
                                            <article class="tile is-child box">
                                            <h2 class="subtitle">Project 4: title goes here</h2>
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
                                            <h2 class="subtitle">Project 5: title goes here</h2>
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
                                            <h2 class="subtitle">Project 6: title goes here</h2>
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
                                    {/** tiles stop here --> ancester/parent/childheirarchy */}
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