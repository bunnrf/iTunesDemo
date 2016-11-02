module.exports = {
  fetchTopTracks: function(count, callback) {
    $.ajax({
      url: "api/tracks/top",
      data: { count: count },
      success: function(tracks) {
        callback(tracks);
      }
    });
  }
};
