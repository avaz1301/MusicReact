import React, {Component} from 'react';
import {connect} from 'react-redux';
import AlbumInfo from '../components/album_info';

class ArtistList extends Component {
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
    const mus = this.props.music[0];
    if(!mus){
      return(
        <div></div>
      );
    }
    const origArtist=this.props.music[0].albums.items[0].artists[0].name;
    ////////////////////////////////////////////////////
    console.log(this.props.music);
    return(
      <div>
        <h2>{origArtist}</h2>
        {this.props.music[0].albums.items.map(this.displayAlbums.bind(null, origArtist))}
      </div>
    );
  }
  //////////////////////////////////////////////////
}

function mapStateToProps({music}){
  return {music};
}

export default connect (mapStateToProps)(ArtistList);
