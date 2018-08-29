import PLAYERS from '../mock/mock';
import { ADD_NEW_PLAYER, UPDATE_PLAYER_SCORE, REMOVE_PLAYER } from '../actions';
import reducer from './ReducerPlayerList';

describe('ReducerPlayerList', () => {
  const player = { name: 'Test name', id: 1, score: 0 };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(PLAYERS);
  });

  it('should add a new player', () => {
    const action = {
      type: ADD_NEW_PLAYER,
      player,
    };
    expect(reducer([], action)).toEqual([action.player]);
  });

  it("should update a player's score", () => {
    const action = {
      type: UPDATE_PLAYER_SCORE,
      id: 1,
      newScore: 2,
    };
    expect(reducer([player], action)).toEqual([
      { ...player, score: action.newScore },
    ]);
  });

  it('should delete a player', () => {
    const action = {
      type: REMOVE_PLAYER,
      id: 1,
    };
    expect(reducer([player], action)).toEqual([]);
  });
});
