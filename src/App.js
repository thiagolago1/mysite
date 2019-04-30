import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CardSocialMedia from './components/CardSocialMedia';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div >

          <Navbar />
          <CardSocialMedia />
          <Footer />

      </div>
    );
  }
}

export default App;
