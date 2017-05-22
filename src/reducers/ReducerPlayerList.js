import _ from 'lodash';
import PLAYERS from '../mock/mock';
import { ADD_NEW_PLAYER, UPDATE_PLAYER_SCORE, REMOVE_PLAYER } from '../actions';

export const ReducerPlayerList = (state = PLAYERS, action) => {
  switch (action.type) {
    case ADD_NEW_PLAYER:
      return [...state, action.payload]; // { current players, A new player }
    case UPDATE_PLAYER_SCORE:
      {
        const updatedItems = state.map((player) => {
          if (player.id === action.id) {
            return { ...player, score: action.payload }; // { player.score = newScore }
          }

          return player;
        });
        // console.log(updatedItems);
        return updatedItems;
      }

    case REMOVE_PLAYER:
      return state.filter(element => element.id !== action.payload);
    default:
      return state; // { player 1, player 2, etc. }
  }
};
