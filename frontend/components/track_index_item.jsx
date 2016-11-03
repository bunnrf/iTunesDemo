import React from 'react';
import { hashHistory } from 'react-router';
import PlayerActions from '../actions/player_actions';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this.state = {};
  }

  _handleClick() {
    PlayerActions.playTrack(this.props.track);
  }

  render() {
    const track = this.props.track;
    return (
      <div className="track-index-item" onClick={this._handleClick}>
        <img alt src={track["im:image"][2].label}></img>
      </div>
    );
  }
}

module.exports = TrackIndexItem;
