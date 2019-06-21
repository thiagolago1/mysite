import React, { Component } from 'react';
import Navbar from './Navbar';
import Cards from './Cards';

class Page extends Component {
  render() {
    return (
      <div >

          <Navbar />
          <Cards />

      </div>
    );
  }
}

export default Page;