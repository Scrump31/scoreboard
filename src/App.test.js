import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import PLAYERS from './mock/mock';

describe('<App />', () => {
  it('should render without crashing', () => {
    ReactDOM.render(<App initialPlayers={PLAYERS} />, document.createElement('div'));
  });

  it('should return 3 initial players', () => {
    const wrapper = shallow(<App initialPlayers={PLAYERS} />);
    expect(mount(wrapper).find().length).toBe(3);
  });
});
