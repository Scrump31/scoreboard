import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Root';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root'),
);
