import React from 'react';
import TrackStore from '../stores/track_store';
import TrackActions from '../actions/track_actions';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tracks: {}};
  }

  componentDidMount() {
    this.tracksListener = TrackStore.addListener(this._onTracksChange);
    TrackActions.fetchTop40();
  }

  componentWillUnmount() {
    this.tracksListener.remove();
  }

  _onTracksChange() {
    this.setState({tracks: TrackStore.all()})
  }

  render() {
    console.log(this.state.tracks);
    return (
      <div>
        <h1>hi</h1>
      </div>
    );
  }
}

module.exports = TrackIndex;
