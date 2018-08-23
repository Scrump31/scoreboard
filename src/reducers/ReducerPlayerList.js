import _ from 'lodash';
import PLAYERS from '../mock/mock';
import { ADD_NEW_PLAYER, UPDATE_PLAYER_SCORE, REMOVE_PLAYER } from '../actions';

export const ReducerPlayerList = (state = PLAYERS, action) => {
  switch (action.type) {
    case ADD_NEW_PLAYER:
      return [...state, action.payload]; // { current players, A new player }
    case UPDATE_PLAYER_SCORE:
      return state.map(player =>
        (player.id === action.id ? { ...player, score: action.newScore } : player));

    case REMOVE_PLAYER:
      return state.filter(element => element.id !== action.payload);
    default:
      return state; // { player 1, player 2, etc. }
  }
};
