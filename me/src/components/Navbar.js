import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <div>
                <nav class="navbar is-fixed-bottom" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a href="hello" role="button" class="navbar-burger burger" aria-label="menu" aria expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                        <a hrfe="#AboutSection" class="navbar-item">about me</a>
                        <a hrfe="#SkillsSection" class="navbar-item">skills</a>
                        <a hrfe="#ExperienceSection" class="navbar-item">Experience</a>
                        <a hrfe="#EducationSection" class="navbar-item">Education</a>
                        <a hrfe="#PortfolioSection" class="navbar-item">portfolio</a>
                        <a hrfe="#ContactSection" class="navbar-item">contact</a>
                        </div>
                    </div>
                </nav>
                <nav class="navbar is-fix-bottom" role="navigation" aria-lable="main navigation">

                </nav>
            </div>
        );
    }
}

export default Navbar;