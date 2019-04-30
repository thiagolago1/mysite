import React, { Component } from 'react';

class CardSocialMedia extends Component {
  render() {
    return (
      <div className="row">
        <br/>
        <br/>
        <div className="row">
            <div className="col s12 m4 l2 ">
                <div className="card purple darken-4">
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
        </div>
      </div>
    );
  }
}

export default CardSocialMedia;