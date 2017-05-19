import PLAYERS from '../mock/mock';

export const ReducerPlayerList = (state = PLAYERS, action) => {
  switch (action.type) {
    case 'PlAYER_LIST':
      return action.payload; // { player 1, player 2, etc. }
    default:
      return state;
  }
};
