Notifications = new Mongo.Collection(null);

notify = function(message, type) {
  Notifications.insert({message: message, type: type});
};

Template.notifications.helpers({
  notifications: function() {
    return Notifications.find();
  }
});

Template.notification.onRendered(function() {
  var notification = this.data;
  Meteor.setTimeout(function () {
    Notifications.remove(notification._id);
  }, 3000);
});