import { combineReducers } from 'redux';
import { ReducerPlayerList as players } from './ReducerPlayerList';

const rootReducer = combineReducers({ players });

export default rootReducer;
