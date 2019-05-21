import React, { Component } from 'react';
import { IconUser, IconBars, IconMenu, IconEmail, IconMarker, IconComment, IconCode } from '../icons/itens';

class Navbar extends Component {
  render() {
    return (
      <div>
      <nav>
          <div className="nav-wrapper purple darken-4">
              <a style={{fontSize: '2.1rem' }}>Thiago Lago <IconCode/> Developer </a>
              <a href="#!" data-target="mobile-demo" className="sidenav-trigger show-on-large"><IconBars/></a>
              <ul className="right hide-on-med-and-down purple darken-4">
                <li><a href="#!sidenav"><IconMenu/> </a></li>
                <li><a href="#!About"><IconUser /> </a></li>
            </ul>
          </div>
      </nav>
      <ul className="sidenav" id="mobile-demo" >
          <li><a href="#!Me" className="purple darken-4" ><IconUser/><b> Thiago Lago</b></a></li>
          <li><a href="#!Email"><IconEmail/> E-mail </a></li>
          <li><a href="#!Local"><IconMarker/> Brasília - DF - Brasil</a></li>
          <li><a href="#!Telegram"><IconComment/> Telegram </a></li>
      </ul>
  </div>
    );
  }
}

export default Navbar;