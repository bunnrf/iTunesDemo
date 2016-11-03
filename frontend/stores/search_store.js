import { Store } from 'flux/utils';
import dispatcher from '../dispatcher';

let _artists = [];

const SearchStore = new Store(dispatcher);

SearchStore.allArtists = () => _artists;

function resetAllArtists(artists) {
  _artists = artists.results.slice(0, 8);
}

SearchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "ARTISTS_RECEIVED":
      resetAllArtists(payload.artists);
      this.__emitChange();
      break;
  }
}

module.exports = SearchStore;
