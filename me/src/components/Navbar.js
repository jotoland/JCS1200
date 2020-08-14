import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return(
            <div>
                <nav class="navbar is-fixed-bottom" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a href="hello" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a href="#AboutSection" class="navbar-item">about me</a>
                            <a href="#SkillsSection" class="navbar-item">skills</a>
                            <a href="#ExperienceSection" class="navbar-item">experience</a>
                            <a href="#EducationSection" class="navbar-item">education</a>
                            <a href="#PortfolioSection" class="navbar-item">portfolio</a>
                            <a href="#ContactSection" class="navbar-item">contact</a>
                        </div>
                    </div>
                </nav>
                <nav class="navbar is-fixed-bottom" role="navigation" aria-label="main navigation">

                </nav>
            </div>
        );
    }
}

export default Navbar;