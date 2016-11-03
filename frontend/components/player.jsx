import React from 'react';
import PlayerStore from '../stores/player_store';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this._trackChanged = this._trackChanged.bind(this);
    this.state = {track: null};
  }

  componentDidMount() {
    this.playerListener = PlayerStore.addListener(this._trackChanged);
  }

  _trackChanged() {
    this.setState({track: PlayerStore.currentTrack()});
    this._play();
  }

  _play() {
    const video = document.getElementById("audio-controller");
    video.load();
    video.play();
  }

  render() {
    const track = this.state.track;
    return (
      <div className="player">
        {track ? <div className="track-details">
          <img alt src={track ? track["im:image"][2].label : ""}></img>
          <div className="artist-details">
            <span>{track.title.label}</span>
          </div>
        </div> : null}
        <div className="audio-container">
          <video id="audio-controller" controls autoPlay>
            <source src={track ? track.link[1].attributes.href : ""}
              type="audio/x-m4a" />
          </video>
        </div>
      </div>
    );
  }
}
module.exports = Player;
