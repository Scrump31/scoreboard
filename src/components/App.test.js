import React from 'react';
import { shallow } from 'enzyme';
import Stats from '../containers/Stats';
import PlayerList from '../containers/PlayerList';
import Timer from './Timer';
import AddPlayer from '../containers/AddPlayer';
import App from './App';

describe('<App />', () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  it('should render without crashing', () => {
    shallow(<App />);
  });

  it('should render <PlayerList />', () => {
    expect(wrapped.find(PlayerList).length).toEqual(1);
  });
  it('should render <Timer />', () => {
    expect(wrapped.find(Timer).length).toEqual(1);
  });
  it('should render <AddPlayer />', () => {
    expect(wrapped.find(AddPlayer).length).toEqual(1);
  });
  it('should render <Stats />', () => {
    expect(wrapped.find(Stats).length).toEqual(1);
  });
});
