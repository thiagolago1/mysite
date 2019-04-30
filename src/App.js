import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div >

          <Navbar />
          <Cards />
          <Footer />

      </div>
    );
  }
}

export default App;
