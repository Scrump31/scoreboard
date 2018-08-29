import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const component = mount(
      <Root>
        <App />
      </Root>,
    );
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
