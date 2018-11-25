import React from 'react';
import { shallow, mount } from 'enzyme';
import Counter from './Counter';

const ADD_BTN = 'button.btn-success';
const SUBTRACT_BTN = 'button.btn-danger';
const SCORE = 'span';

describe('<Counter />', () => {
  test('renders without crashing', () => {
    const component = shallow(<Counter />);
    expect(component).toMatchSnapshot();
  });

  it('displays a score based on props.score', () => {
    const component = shallow(<Counter score={3} />);
    expect(component.find(SCORE).text()).toEqual('3');
  });

  it('calls mockUpdateScore() when "Add" button clicked', () => {
    const mockUpdateScore = jest.fn();
    const wrapper = mount(<Counter updateScore={mockUpdateScore} />);
    wrapper.find(ADD_BTN).simulate('click');
    expect(mockUpdateScore).toHaveBeenCalled();
    wrapper.unmount();
  });

  it('calls mockUpdateScore() when "Subtract" button clicked', () => {
    const mockUpdateScore = jest.fn();
    const wrapper = mount(<Counter updateScore={mockUpdateScore} />);
    wrapper.find(SUBTRACT_BTN).simulate('click');
    expect(mockUpdateScore).toHaveBeenCalled();
    wrapper.unmount();
  });
});
