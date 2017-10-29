import { combineReducers } from 'redux';
import SpotsReducer from './reducer_spots';

const rootReducer = combineReducers({
  spots: SpotsReducer
});

export default rootReducer;
