import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMusic} from '../actions/index';
import AlbumInfo from '../components/album_info';

class ArtistList extends Component {
  componentWillMount(){
    this.props.fetchMusic(this.props.params.artist);
  }

  displayAlbums(origArtist, albumData){
    const id = albumData.id.toString();
    const artist = albumData.artists[0].name;
    const title = albumData.name.toString();
    const image = albumData.images[1].url;
    if(artist === origArtist){
      return(
          <AlbumInfo key={id} artist={artist} title={title} image={image} />
      );
    }
  }

  render(){

    const {music} = this.props;
    if(!music){
      return(
        <div>Loading...</div>
      );
    }
    const origArtist=music[0].artists[0].name;
    return(
      <div id="album-list" className="text-center">
        <h1>{origArtist}</h1>
        <div className="row justify-content-center">
          {music.map(this.displayAlbums.bind(null, origArtist))}
        </div>
      </div>

    );
  }
}

function mapStateToProps(state){
  return {music: state.music.albums};
}

export default connect (mapStateToProps, {fetchMusic})(ArtistList);
