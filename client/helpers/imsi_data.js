ImsiData = new Mongo.Collection(null);

addImsiDatum = function(location, threat_level) {
  ImsiData.insert({location: location, threat_level: threat_level});
};

Template.stingray.helpers({
  imsiData: function() {
    return ImsiData.find();
  }
});

Meteor.methods({
  loadImsiData: function() {
    // var self = this;
    // try {
    //   HTTP.get('https://whispering-sea-9303.herokuapp.com/api/v1/imsi_data', {
    //     params: {

    //     }
    //   }, function(error, result){
    //       console.log("Result: " + result.data);
    //       if (error) {

    //       } else {
    //     _.each(result.data, function(item) {
    //         console.log("Thread", item.aimsicd_threat_level)
    //         var imsiDatum = {
    //           location: "Someplace",
    //           threat_level: item.aimsicd_threat_level
    //         };
    //         // addImsiDatum(location, threat_level);
    //         console.log("data point added");
    //       });
    //     }
    //     // this.unblock();
    //   });
    // } catch(error) {
    //   console.log(error);
    // }
  }
});

Meteor.startup(function () {
  if ( ImsiData.find().count() === 0 ) {
    for (var i = 0; i < 10; i++) {
      var imsiDatumId = ImsiData.insert({
        location: "Houston, TX",
        threatLevel: "Medium",
        observedAt: new Date()
      });
    }
  }
});