import React from 'react';
import { mount } from 'enzyme';
import { AddPlayer } from './AddPlayer';

describe('<AddPlayer />', () => {
  const mockAddNewPlayer = jest.fn();

  it('calls mockAddNewPlayer() when name is entered and "Add" button clicked', () => {
    const component = mount(<AddPlayer createPlayer={mockAddNewPlayer} />);
    component
      .find('input')
      .simulate('change', { target: { value: 'new player' } });
    component.find('form').simulate('submit', { preventDefault() {} });
    expect(mockAddNewPlayer).toHaveBeenCalled();
    component.unmount();
  });
});
