import React, {Component} from 'react';

class NavBar extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <a className="navbar-brand" href="#">ReactMusic</a>
        </nav>
    );
  }
}

export default NavBar;
