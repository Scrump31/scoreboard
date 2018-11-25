import {
  addNewPlayer,
  updatePlayerScore,
  removePlayer,
  ADD_NEW_PLAYER,
  UPDATE_PLAYER_SCORE,
  REMOVE_PLAYER,
} from './index';

describe('Actions', () => {
  describe('addNewPlayer', () => {
    it('should create an action to add a new player', () => {
      const player = { id: 1, name: 'test name', score: 0 };
      const expectedAction = {
        type: ADD_NEW_PLAYER,
        player,
      };
      expect(addNewPlayer(player)).toEqual(expectedAction);
    });
  });

  describe('updatePlayerScore', () => {
    it("should update a player's score", () => {
      const action = { newScore: 2, id: 1 };
      const expectedAction = {
        type: UPDATE_PLAYER_SCORE,
        id: 1,
        newScore: 2,
      };
      expect(updatePlayerScore(action.newScore, action.id)).toEqual(
        expectedAction,
      );
    });
  });

  describe('removePlayer', () => {
    it('should remove a player', () => {
      const id = 1;
      const expectedAction = {
        type: REMOVE_PLAYER,
        id,
      };
      expect(removePlayer(id)).toEqual(expectedAction);
    });
  });
});
