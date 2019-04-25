import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CardSocialMedia from './components/CardSocialMedia'

class App extends Component {
  render() {
    return (
      <div >

          <Navbar />
          <CardSocialMedia />

      </div>
    );
  }
}

export default App;
