(function(){Meteor.startup(function () {
    if ( Meteor.users.find().count() === 0 ) {
        Accounts.createUser({
            email: 'marvin@gounplugged.co',
            password: Meteor.settings.marvinPassword,
            profile: {
                first_name: 'Marvin',
                last_name: 'Arnold',
                company: 'Unplugged'
            }
        });
    }
});

})();
