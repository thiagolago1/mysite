import React, { Component } from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';

class Page extends Component {
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

export default Page;