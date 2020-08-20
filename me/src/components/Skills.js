import React, { Component } from 'react';

class Skills extends Component {
    render(){
        return(
            <div id="SkillsSection">
                <section class="section is-medium">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-three-quarters">
                            <h1 class="title">Technical Skills</h1>
                            {/** Place Colored Line Here */}
                            <div class="columns is-centered">
                                <div class="column is-three-quarters">
                                    <nav class="level">
                                        <div class="level-item">Javascript</div>
                                        <div class="level-item">C#</div>
                                        <div class="level-item">CSS</div>
                                        <div class="level-item">HTML</div>
                                        <div class="level-item">JSX</div>
                                    </nav>
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

export default Skills;