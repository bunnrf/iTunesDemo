import { Store } from 'flux/utils';
import dispatcher from '../dispatcher';

let _tracks = [];

const TrackStore = new Store(dispatcher);

TrackStore.all = () => _tracks;
TrackStore.currentTrack = () => _currentTrack;

TrackStore.changeTrack = function(track) {
  _currentTrack = track;
}

function resetAllTracks(tracks) {
  _tracks = tracks;
}

TrackStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "RECEIVE_TRACKS":
      resetAllTracks(payload.tracks);
      this.__emitChange();
      break;
  }
}

module.exports = TrackStore;
