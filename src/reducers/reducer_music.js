import {FETCH_MUSIC} from '../actions/index';

export default function ( state = [], action){
    switch(action.type){
      case FETCH_MUSIC:
      // return state.concat([action.payload.data]);
        return [action.payload.data, ...state];
    }
    return state;
}
