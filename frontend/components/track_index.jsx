import React from 'react';
import TrackStore from '../stores/track_store';
import TrackActions from '../actions/track_actions';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
    this._tracksChanged = this._tracksChanged.bind(this);
    this.state = {tracks: []};
  }

  componentDidMount() {
    TrackActions.fetchTop40();
    this.tracksListener = TrackStore.addListener(this._tracksChanged);
  }

  componentWillUnmount() {
    this.tracksListener.remove();
  }

  _tracksChanged() {
    this.setState({tracks: TrackStore.all()});
  }

  buildTracks(tracks) {
    let key = 0;
    return tracks.map(track => {
      return <TrackIndexItem key={key++} track={track} />
    });
  }

  render() {
    let trackIndexItems = this.buildTracks(this.state.tracks);
    return (
      <div className="track-index">
        {trackIndexItems}
      </div>
    );
  }
}

module.exports = TrackIndex;
