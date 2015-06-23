(function(){Meteor.startup(function () {
  Signups._ensureIndex('email', {unique: 1, sparse: 1});
});

})();
