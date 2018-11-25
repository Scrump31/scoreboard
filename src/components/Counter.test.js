import React from 'react';
import { shallow, mount } from 'enzyme';
import Counter from './Counter';

const ADD_BTN = 'button.btn-success';
const SUBTRACT_BTN = 'button.btn-danger';
const SCORE = 'span';

describe('<Counter />', () => {
  it('renders without crashing', () => {
    const component = shallow(<Counter />);
    expect(component).toMatchSnapshot();
  });

  let wrapper;
  let mockUpdateScore;

  beforeEach(() => {
    mockUpdateScore = jest.fn();
    wrapper = mount(<Counter score={3} updateScore={mockUpdateScore} />);
  });

  afterEach(() => wrapper.unmount());

  it('displays a score based on props.score', () => {
    expect(wrapper.find(SCORE).text()).toEqual('3');
  });

  it('calls mockUpdateScore() when "Add" button clicked', () => {
    wrapper.find(ADD_BTN).simulate('click');
    expect(mockUpdateScore).toHaveBeenCalled();
  });

  it('calls mockUpdateScore() when "Subtract" button clicked', () => {
    wrapper.find(SUBTRACT_BTN).simulate('click');
    expect(mockUpdateScore).toHaveBeenCalled();
  });
});
