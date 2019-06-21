import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div >

          <div>
             <Page />
          </div>


          <div>
            <Footer />
          </div>

      </div>
    );
  }
}

export default App;
