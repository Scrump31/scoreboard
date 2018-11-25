import React from 'react';
import { mount } from 'enzyme';
import { PlayerList } from './PlayerList';
import PLAYERS from '../mock/mock';

const PLAYER_ROW = '.row .player-name.col-xs-9';

describe('<PlayerList />', () => {
  it('creates 3 Players given an array of 3 player objects', () => {
    const component = mount(<PlayerList players={PLAYERS} />);
    expect(component.find(PLAYER_ROW).length).toEqual(3);
    component.unmount();
  });
});
