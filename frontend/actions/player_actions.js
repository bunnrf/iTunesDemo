import dispatcher from '../dispatcher';

const PlayerActions = {
  playTrack: function(track) {
    dispatcher.dispatch({
      actionType: "PLAY_TRACK",
      track: track
    });
  }
}

module.exports = PlayerActions;
