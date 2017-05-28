import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ReducerPlayerList } from './ReducerPlayerList';

const rootReducer = combineReducers({
  players: ReducerPlayerList,
  form: formReducer,
});

export default rootReducer;
