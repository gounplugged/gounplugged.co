if(Meteor.isClient) {
  notify = function(message, type) {
    Notifications.insert({message: message, type: type});
  };
}