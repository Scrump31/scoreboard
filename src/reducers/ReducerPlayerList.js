import PLAYERS from '../mock/mock';
import { ADD_NEW_PLAYER } from '../actions';

export const ReducerPlayerList = (state = PLAYERS, action) => {
  switch (action.type) {
    case ADD_NEW_PLAYER:
      return [...state, action.payload]; // { current players, A new player }
    default:
      return state; // { player 1, player 2, etc.
  }
};
