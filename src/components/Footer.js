import React, { Component } from 'react';
import { IconCode } from '../icons/itens';

class Footer extends Component {
  render() {
    return (
      <div>
      <footer className="page-footer deep-purple accent-3" style={{width: 1280 ,position: 'fixed', bottom: '0', left: '0'}}>
          <div className="container purple darken-4">
            {/* <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Thiago Lago</h5>
                <p class="grey-text text-lighten-4">Entre em contato</p>
              </div>
              {/* <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="footer-copyright purple darken-4">
            <div className="container purple darken-4">
            © 2019 Todos os Direitos Reservados. Desenvolvido por Thiago Lago.
            <a className="grey-text text-lighten-4 right purple darken-4" href="#!"><IconCode /></a>
            </div>
          </div>
        </footer>
  </div>
    );
  }
}

export default Footer;