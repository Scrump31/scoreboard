import { combineReducers } from 'redux';
import players from './ReducerPlayerList';

const rootReducer = combineReducers({ players });

export default rootReducer;
