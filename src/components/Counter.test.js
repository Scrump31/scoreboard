import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

it('renders without crashing', () => {
  ReactDOM.render(<Counter />, document.createElement('div'));
});
