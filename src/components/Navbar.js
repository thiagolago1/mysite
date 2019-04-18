import React, { Component } from 'react';
import { IconBars, IconSearch } from '../icons/itens';

class Navbar extends Component {
  render() {
    return (
      <div >
       <nav>
        <div className="nav-wrapper light-blue darken-4">
            <a href="#!" className="brand-logo light-blue darken-4"><IconBars /> TL</a>
            <ul className="right hide-on-med-and-down light-blue darken-4">
                <li><a href="#!"><IconSearch /></a></li>
                <li><a href="#!"><i className="material-icons">view_module</i></a></li>
                <li><a href="#!"><i className="material-icons">refresh</i></a></li>
                <li><a href="#!"><i className="material-icons">more_vert</i></a></li>
            </ul>
        </div>
       </nav>
      </div>
    );
  }
}

export default Navbar;