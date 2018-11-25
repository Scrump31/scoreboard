import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('<Timer />', () => {
  it('renders correctly', () => {
    const component = shallow(<Timer />);
    expect(component).toMatchSnapshot();
  });
});
