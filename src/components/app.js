import React, {Component} from 'react';

import NavBar from '../components/navbar';
import SearchBar from '../containers/search_bar';
import ArtistList from '../containers/artist_list';


export default class App extends Component {
  render(){
    return(
      <div>
        <NavBar />
        <SearchBar />
        <ArtistList />
      </div>
    );
  }
}
