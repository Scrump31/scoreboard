import { combineReducers } from 'redux';
import { ReducerPlayerList } from './ReducerPlayerList';
import { ReducerPlayerScore } from './ReducerPlayerScore';

const rootReducer = combineReducers({
  players: ReducerPlayerList,
  totalScore: ReducerPlayerScore,
});

export default rootReducer;
