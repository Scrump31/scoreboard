import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import store from './reducers/index';

export default ({ children }) => (
  <Provider store={createStore(store)}>{children}</Provider>
);
