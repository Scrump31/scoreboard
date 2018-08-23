export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER';
export const UPDATE_PLAYER_SCORE = 'UPDATE_PLAYER_SCORE';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';

export const addNewPlayer = player => ({
  type: ADD_NEW_PLAYER,
  payload: player,
});
export default addNewPlayer;

export const updatePlayerScore = (newScore, id) => ({
  type: UPDATE_PLAYER_SCORE,
  id,
  newScore,
});

export const removePlayer = playerId => ({
  type: REMOVE_PLAYER,
  payload: playerId,
});
