import React, {Component} from 'react';

import NavBar from './navbar';
import SearchBar from '../containers/search_bar';
import ArtistList from '../containers/artist_list';


export default class App extends Component {
  render(){
    return(
      <div id="app">
        <NavBar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
