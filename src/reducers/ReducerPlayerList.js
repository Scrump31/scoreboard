import PLAYERS from '../mock/mock';
import { ADD_NEW_PLAYER, UPDATE_PLAYER_SCORE, REMOVE_PLAYER } from '../actions';

const ReducerPlayerList = (state = PLAYERS, action) => {
  switch (action.type) {
    case ADD_NEW_PLAYER:
      return [...state, action.player];

    case UPDATE_PLAYER_SCORE:
      return state.map(
        player =>
          player.id === action.id
            ? { ...player, score: action.newScore }
            : player,
      );

    case REMOVE_PLAYER:
      return state.filter(player => player.id !== action.id);
    default:
      return state;
  }
};

export default ReducerPlayerList;
