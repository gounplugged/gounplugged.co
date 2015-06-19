Template.aboutWelcome.events({
  'click #signup-button': function(e) {
    e.preventDefault();
    var email = $('#signup-email').first();
    var address = email.val();

    if(!address) return;

    var signup = {
      email: address,
    };

    email.val('');
    Meteor.call('signupCreate', signup, function(error, padId) {
      if (error){
        notify("Sorry, " + address + " has already registered.", "warning");
      } else {
        notify("Thank you, " + address + " has been registered.", "success");
      }

      return;
    });
  },
});