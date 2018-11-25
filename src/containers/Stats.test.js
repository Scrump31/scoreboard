import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import Stats from './Stats';

const TTL_PLAYERS = '#total_players';
const TTL_SCORE = '#total_score';

describe('<Stats />', () => {
  let component;

  beforeEach(() => {
    component = mount(
      <Root>
        <Stats />
      </Root>,
    );
  });

  afterEach(() => component.unmount());

  test('given an initial 3 players, it should display "Players: 3"', () => {
    expect(component.find(TTL_PLAYERS).text()).toEqual('3');
  });

  test('given an initial 3 players, it should display "Total Points: 108"', () => {
    expect(component.find(TTL_SCORE).text()).toEqual('108');
  });
});
