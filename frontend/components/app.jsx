import React from 'react';
import SearchBar from './search_bar';
import Player from './player';

class app extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <SearchBar />
        {this.props.children}
        <Player />
      </div>
    );
  }
}

module.exports = app;
