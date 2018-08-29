import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import Stats from './Stats';

describe('<Stats />', () => {
  it('renders without crashing', () => {
    const component = mount(
      <Root>
        <Stats />
      </Root>,
    );
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
