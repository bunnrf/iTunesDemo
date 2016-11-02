import dispatcher from '../dispatcher';
import TrackApiUtil from '../util/track_api_util';

const TrackActions = {
  fetchTop40: function() {
    TrackApiUtil.fetchTopTracks(40, this.receiveTracks);
  },

  receiveTracks: function(tracks) {
    dispatcher.dispatch({
      actionType: "RECEIVE_TRACKS",
      tracks: tracks
    });
  }
}

module.exports = TrackActions;
