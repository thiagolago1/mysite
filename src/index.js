import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome,
faBars,
faUserAstronaut,
faTh,
faEnvelope,
faMapMarkerAlt, faComment,
faCode }
from '@fortawesome/free-solid-svg-icons';

library.add(faHome)
library.add(faBars)
library.add(faUserAstronaut)
library.add(faTh)
library.add(faEnvelope)
library.add(faMapMarkerAlt)
library.add(faComment)
library.add(faCode)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
