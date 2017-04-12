/* global document:true*/

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PLAYERS from './mock/mock';
import App from './App';
import './index.css';


ReactDOM.render(
  <App initialPlayers={PLAYERS} />,
  document.getElementById('root'),
);
