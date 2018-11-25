import React from 'react';
import { mount } from 'enzyme';
import Counter from './Counter';

const ADD_BTN = 'button.btn-success';
const SUBTRACT_BTN = 'button.btn-danger';
const SCORE = 'span';

describe('<Counter />', () => {
  let component;
  let mockUpdateScore;

  beforeEach(() => {
    mockUpdateScore = jest.fn();
    component = mount(<Counter score={3} updateScore={mockUpdateScore} />);
  });

  afterEach(() => component.unmount());

  it('displays a score based on props.score', () => {
    expect(component.find(SCORE).text()).toEqual('3');
  });

  it('calls mockUpdateScore() when "Add" button clicked', () => {
    component.find(ADD_BTN).simulate('click');
    expect(mockUpdateScore).toHaveBeenCalled();
  });

  it('calls mockUpdateScore() when "Subtract" button clicked', () => {
    component.find(SUBTRACT_BTN).simulate('click');
    expect(mockUpdateScore).toHaveBeenCalled();
  });
});
