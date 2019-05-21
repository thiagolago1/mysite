import React, { Component } from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import codeimage from '../imagens/codeimage.jpg'

class Cards extends Component {
  render() {
    return (

      <div>
        <br />
        <br />
        <div >

          <CardDeck style={{marginRight: 0, marginLeft: 0}}>

                <Card style={{ width: '18rem', height: 450}} className="card small grey darken-4 white-text">
                <Card.Img variant="top"/>
                <Card.Body>
                    <Card.Title style={{fontSize: '-webkit-xxx-large'}}> Social Medias </Card.Title><br />
                    <Card.Text>
                      <div>
                        <a className="white-text" href="#!" style={{fontSize: 'xx-large'}}><i className="fab fa-linkedin white-text" /> LinkedIn</a>
                      </div>
                      <div>
                        <a className="white-text" href="#!" style={{fontSize: 'xx-large'}}><i className="fab fa-github white-text"></i> GitHub</a>
                      </div>
                      <div>
                        <a className="white-text" href="#!" style={{fontSize: 'xx-large'}}><i className="fab fa-instagram white-text"></i> Instagram</a>
                      </div>
                </Card.Text>

                </Card.Body>
                </Card>

                <Card style={{ width: '18rem', height: 450 }} className="card small grey darken-4 white-text">
                  <Card.Img variant="top"/>
                  <Card.Body>
                    <Card.Title style={{fontSize: '-webkit-xxx-large'}}>About Me</Card.Title>
                    <Card.Text>
                      About Me About Me About Me About Me About Me About Me About Me About Me About Me
                      About Me About Me About Me About Me About Me About Me About Me About Me About Me
                      About Me About Me About Me About Me About Me About Me About Me About Me About Me
                      About Me About Me About Me About Me About Me About Me About Me About Me About Me
                      About Me About Me About Me About Me About Me About Me About Me About Me About Me
                      About Me About Me About Me About Me About Em About Me About Me About Me About Me
                      About Me About Me About Me About Me About Me About Me About Me About Me About Me
                      About Me About Me About Me About Me About Me About Me About Me About Me About Me
                      About Me About Me About Me About Me About Me About Me About Me About Me About Me
                      About Me About Me About Me About Me About Me About Me About Me About Me About Me
                      About Me About Me About Me About Me About Me About Me
                    </Card.Text>
                    <Button variant="primary"><i className="fab fa-linkedin white-text" /> LinkedIn</Button>
                  </Card.Body>
                </Card>;

                <Card style={{ width: '18rem', height: 450 }} className="card small grey darken-4 white-text">
                  <Card.Img variant="top" src={codeimage}/>
                  <Card.Body>
                    <Card.Title > Skills </Card.Title>
                    <Card.Text>
                   Java, Python, Django, ReactJS, AngularJS, Html, CSS, JavaScript

                    </Card.Text>
                    <Button variant="primary"><i className="fab fa-github white-text"></i> GitHub</Button>
                  </Card.Body>
                </Card>;
          </CardDeck>;

        </div>
      </div>
    );
  }
}

export default Cards;