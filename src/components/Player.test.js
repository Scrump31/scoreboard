import React from 'react';
import { mount } from 'enzyme';
import Player from './Player';

const REMOVE_BTN = 'button.glyphicon-remove';
const PLAYER_NAME = 'div.player-name.col-xs-9 > div';

let component;
let mockDelPlayer;

beforeEach(() => {
  mockDelPlayer = jest.fn();
  component = mount(<Player name={'test name'} deletePlayer={mockDelPlayer} />);
});

afterEach(() => component.unmount());

describe('<Player />', () => {
  it('displays a name based on props.name', () => {
    expect(component.find(PLAYER_NAME).text()).toEqual('test name');
  });

  it('calls mockDelPlayer() when "x" button clicked', () => {
    component.find(REMOVE_BTN).simulate('click');
    expect(mockDelPlayer).toHaveBeenCalled();
  });
});
