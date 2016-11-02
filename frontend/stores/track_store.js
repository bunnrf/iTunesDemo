import { Store } from 'flux/utils';
import dispatcher from '../dispatcher';

let _tracks = {};

const TrackStore = new Store(dispatcher);

TrackStore.all = () => _tracks;

function resetAllTracks(tracks) {
  _tracks = tracks;
}

TrackStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "RECEIVE_TRACKS":
      resetAllTracks(payload.tracks);
      break;
  }
}

module.exports = TrackStore;
