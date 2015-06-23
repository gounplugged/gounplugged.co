Meteor.startup(function(){
  Mapbox.load('minimap', 'markercluster');
  // Meteor.call('loadImsiData');
});

Deps.autorun(function () {
  if (Mapbox.loaded()) {
    L.mapbox.accessToken = Meteor.settings.public.mapboxPublicToken;
    var map = L.mapbox.map('map', 'mapbox.streets').setView([29.94228045, -90.07880318], 14);
  }
});

Template.stingray.rendered = function () {
  this.autorun(function () {
    if (Mapbox.loaded()) {
      L.mapbox.accessToken = Meteor.settings.public.mapboxPublicToken;
      var map = L.mapbox.map('map', 'mapbox.streets').setView([29.94228045, -90.07880318], 14);
    }
  });
};

Template.stingray.helpers({
  recentDetections: function() {
    return ImsiData.find({});
  }
});