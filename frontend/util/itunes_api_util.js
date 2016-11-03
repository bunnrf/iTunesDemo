module.exports = {
  fetchTopTracks: function(count, callback) {
    $.ajax({
      url: "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topsongs/limit=" + count + "/json",
      data: { count: count },
      success: function(tracks) {
        callback(tracks);
      }
    });
  }
};
