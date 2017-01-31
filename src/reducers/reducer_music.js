import {FETCH_MUSIC} from '../actions/index';

const INITIAL_STATE = {
  albums:null
};

export default function ( state = INITIAL_STATE, action){
    switch(action.type){
      case FETCH_MUSIC:
      // return state.concat([action.payload.data]);
        return {
          albums:action.payload.data.albums.items
        };
      default:
        return state;
    }
}
