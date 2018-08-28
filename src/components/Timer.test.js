import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('<Timer />', () => {
  it('renders without crashing', () => {
    const component = shallow(<Timer />);
    expect(component).toMatchSnapshot();
  });
});
