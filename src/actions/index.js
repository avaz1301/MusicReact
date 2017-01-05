import axios from 'axios';

const API_KEY = '';
const ROOT_URL = 'https://api.spotify.com/v1/search';
//make single var that hold the action type
//export it to reducer
export const FETCH_MUSIC = 'FETCH_MUSIC';

export function fetchMusic(artist){
  //format url to match spotify request
  const url = `${ROOT_URL}?q=${artist}&type=album`;
  const request = axios.get(url);

  return{
    type: FETCH_MUSIC,
    payload: request
  };
}
