import { Store } from 'flux/utils';
import dispatcher from '../dispatcher';

let _currentTrack = null;

const PlayerStore = new Store(dispatcher);

PlayerStore.currentTrack = () => _currentTrack;

function resetCurrentTrack(track) {
  _currentTrack = track;
}

PlayerStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case 'PLAY_TRACK':
      resetCurrentTrack(payload.track);
      this.__emitChange();
      break;
  }
}

module.exports = PlayerStore;
