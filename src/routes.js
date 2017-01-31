import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import SearchBar from './containers/search_bar';
import ArtistList from './containers/artist_list';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchBar}/>
    <Route path="result/:artist" component={ArtistList} />
  </Route>
)
