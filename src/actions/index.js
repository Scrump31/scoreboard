export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER';

export const addNewPlayer = player => ({
  type: ADD_NEW_PLAYER,
  payload: player,
});
export default addNewPlayer;
