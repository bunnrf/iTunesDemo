import dispatcher from '../dispatcher';
import ITunesApiUtil from '../util/itunes_api_util';
import TrackActions from './track_actions';

const SearchActions = {
  searchArtists: function(query) {
    ITunesApiUtil.searchArtists(query, this.receiveArtists);
  },

  searchArtistName: function(name) {
    ITunesApiUtil.searchArtistName(name, TrackActions.receiveTracks);
  },

  searchArtistId: function(artistId) {
    ITunesApiUtil.searchArtistId(artistId, TrackActions.receiveTracks);
  },

  receiveArtists: function(artists) {
    dispatcher.dispatch({
      actionType: "ARTISTS_RECEIVED",
      artists: artists
    });
  }
}

module.exports = SearchActions;
