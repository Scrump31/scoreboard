import { combineReducers } from 'redux';
import { ReducerPlayerList } from './ReducerPlayerList';

const rootReducer = combineReducers({
  players: ReducerPlayerList,

});

export default rootReducer;
