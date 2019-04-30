import React, { Component } from 'react';
import CardAbout from './Cards/CardAbout';
import CardSocialMedia from './Cards/CardSocialMedia';

class Cards extends Component {
  render() {
    return (

    <div className="row">
        <br/>
        <br/>
      <div className="row">

            <div className="col s12 m4">
                <div className="card small purple darken-4">
                    <div className="card-content white-text">
                        <span className="card-title">Social Medias</span>
                        <div>
                        <a className="white-text" href="#!"><i className="fab fa-linkedin white-text"/> LinkedIn</a>
                        </div>
                        <div>
                        <a className="white-text" href="#!"><i className="fab fa-github white-text"></i> GitHub</a>
                        </div>
                        <div>
                        <a className="white-text" href="#!"><i className="fab fa-instagram white-text"></i> Instagram</a>
                        </div>
                    </div>
                </div>
            </div>


              <div class="col s12 m4">
                <div class="card small">
                  <div class="card-image">
                    {/* <img src="images/sample-1.jpg"> */}
                    <p> About Me</p>
                    <span class="card-title">About Me</span>
                  </div>
                  <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div class="card-action">
                    <a href="#">LinkedIn</a>
                  </div>
                </div>
              </div>



              <div class="col s12 m4">
                <div class="card small">
                  <div class="card-image">
                    {/* <img src="images/sample-1.jpg"> */}
                    <p> Skills</p>
                    <span class="card-title">Skills</span>
                  </div>
                  <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div class="card-action">
                    <a href="#">GitHub</a>
                  </div>
                </div>
              </div>

      </div>
    </div>
    );
  }
}

export default Cards;