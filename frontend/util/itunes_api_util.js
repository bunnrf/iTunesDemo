module.exports = {
  fetchTopTracks: function(count, callback) {
    $.ajax({
      url: "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topsongs/limit=" + count + "/json",
      success: function(tracks) {
        callback(JSON.parse(tracks).feed.entry);
      }
    });
  },

  searchArtists: function(query, callback) {
    $.ajax({
      url: "http://ax.phobos.apple.com.edgesuite.net/WebObjects/MZStoreServices.woa/wa/itmsSearch?lang=1&entity=allArtist&output=json&country=US&term=" + query + "&media=music&limit=1/json",
      dataType: 'jsonp',
      success: function(artists) {
        callback(artists);
      }
    });
  },

  searchArtistName: function(name, callback) {
    $.ajax({
      url: "https://itunes.apple.com/search?term=" + name.replace(/ /g, "+"),
      dataType: 'jsonp',
      success: function(tracks) {
        console.log(tracks);
        callback(tracks.results)
      }
    })
  },

  searchArtistId: function(artistId, callback) {
    $.ajax({
      url: "https://itunes.apple.com/lookup?id=" + artistId,
      dataType: 'jsonp',
      success: function(tracks) {
        callback(tracks);
      }
    });
  }
};
