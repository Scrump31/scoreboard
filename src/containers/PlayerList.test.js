import React from 'react';
import { shallow, mount } from 'enzyme';
import { PlayerList } from './PlayerList';
import PLAYERS from '../mock/mock';

const PLAYER_ROW = '.row .player-name.col-xs-9';

describe('<PlayerList />', () => {
  const mockDelPlayer = jest.fn();
  const mockUpdateScore = jest.fn();

  const mockPlayers = PLAYERS;
  it('renders without crashing', () => {
    const component = shallow(
      <PlayerList
        players={mockPlayers}
        updateScore={mockUpdateScore}
        deletePlayer={mockDelPlayer}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('creates 3 Players given an array of 3 player objects ', () => {
    const component = mount(
      <PlayerList
        players={mockPlayers}
        updateScore={mockUpdateScore}
        deletePlayer={mockDelPlayer}
      />,
    );
    expect(component.find(PLAYER_ROW).length).toEqual(3);
    component.unmount();
  });
});
