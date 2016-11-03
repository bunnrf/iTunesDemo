import dispatcher from '../dispatcher';
import ITunesApiUtil from '../util/itunes_api_util';

const TrackActions = {
  fetchTop40: function() {
    ITunesApiUtil.fetchTopTracks(40, this.receiveTracks);
  },

  receiveTracks: function(tracks) {
    dispatcher.dispatch({
      actionType: "RECEIVE_TRACKS",
      tracks: tracks
    });
  }
}

module.exports = TrackActions;
