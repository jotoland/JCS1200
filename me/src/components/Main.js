import React from 'react';
 // name logo will be import here
 // import Name from '';

  // this is the Name Logo which is the Main thing you see
  // when the website loads
  function Main() {
     return(
         <div className="name">
             <section class="hero is-fullheight-with-navbar"id="main">
             <div class="hero-body">
             <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-one-third">
                            <figure class="image is-588x244">
                                {/*<img src={Name} alt=""/>*/}
                                taylor
                            </figure>
                        </div>

                    </div>
             </div>
             </div>
             </section>
         </div>
     );
  }

  export default Main;