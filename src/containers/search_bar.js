import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchMusic} from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term : ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

    onFormSubmit(event){
      event.preventDefault();
      //call spotify api
      this.props.fetchMusic(this.state.term);
      this.setState({term: ''});
    }


    render(){
      return (
        <div className="container">
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input
              placeholder="Enter your favorite artist!"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
              />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

      );
    }
}

//add bind actionCreators
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchMusic},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
