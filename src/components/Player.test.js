import React from 'react';
import { shallow, mount } from 'enzyme';
import Player from './Player';

const REMOVE_BTN = 'button.glyphicon-remove';
const PLAYER_NAME = 'div.player-name.col-xs-9 > div';

describe('<Player />', () => {
  test('renders without crashing', () => {
    const mockfunc = jest.fn();
    const component = shallow(
      <Player
        id={1}
        name={'test name'}
        score={2}
        updateScore={mockfunc}
        deletePlayer={mockfunc}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('displays a name based on props.name', () => {
    const component = mount(<Player name={'test name'} />);
    expect(component.find(PLAYER_NAME).text()).toEqual('test name');
    component.unmount();
  });

  it('calls mockDelPlayer() when "x" button clicked', () => {
    const mockDelPlayer = jest.fn();
    const component = shallow(<Player deletePlayer={mockDelPlayer} />);
    component.find(REMOVE_BTN).simulate('click');
    expect(mockDelPlayer).toHaveBeenCalled();
  });
});
