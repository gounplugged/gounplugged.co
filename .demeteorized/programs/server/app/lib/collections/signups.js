(function(){Signups = new Mongo.Collection('signups');

Meteor.methods({
  signupCreate: function(signupATtributes) {
    check(signupATtributes, {
      email: String,
    });

    var signup = _.extend(signupATtributes, {
      created: new Date()
    });

    var signupId = Signups.insert(signup);
    return {
      _id: signupId
    };
  }
});

})();
