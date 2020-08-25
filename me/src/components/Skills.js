import React, {Component} from 'react';

class Skills extends Component {
    render(){
        return(
            <div id="SkillSection">
                <section class="section is-medium">
                <div class="container">
                 <div class="colums is-centered">
                     <div class="column is-three-quarters">
                         <h1 class="title">Technical Skills</h1>
                         {/** Placed Colored Line Here */}
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
                         <div class="columns">
                            <div class="column is-one-third">
                                <h2 class="subtitle">Operating Systems</h2>
                                <ul>
                                    <li>macOS</li>
                                    <li>Win 10</li>
                                    <li>Linux</li>
                                </ul>
                            </div>
                            <div class="coloumn">
                                <h2 class="subtitle">General</h2>
                                <ul>
                                    <li>.NetCore</li>
                                    <li>Node.js</li>
                                    <li>Raect</li>
                                    <li>Git</li>
                                    <li>VS Code</li>
                                </ul>
                            </div>
                            <div class="column">
                                <h2 class="subtitle">API Technologies</h2>
                                <ul>
                                    <li>REST</li>
                                    <li>JSON</li>
                                    <li>JWT</li>
                                    <li>Swagger</li>
                                    <li>Postman</li>
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

export default Skills;