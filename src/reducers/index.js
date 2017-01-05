import {combineReducers} from 'redux';
import MusicReducer from './reducer_music';
//import reducers

const rootReducer = combineReducers({
  // state: (state = {} )=> state
  music : MusicReducer
});

export default rootReducer;
