import React, {Component} from 'react';

export default class AlbumList extends Component{
  render(){
    var cardStyle = {
      padding: 0,
      margin: 5,
    };

    return(
        <div key={this.props.key} className="card col-sm-3" style={cardStyle}>
          <img className="card-img-top" src={this.props.image} alt="Card image cap" />
          <div className="card-block">
            <h4 className="card-title">{this.props.title} - {this.props.artist}</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

    );
  }
}
