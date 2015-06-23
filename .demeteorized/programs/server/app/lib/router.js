(function(){Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/flyfi', {
  name: 'flyfi',
  onBeforeAction: function() {
    $('body').addClass('page');
    this.next();
  },
  onStop: function() {
    $('body').removeClass('page');
  }
});

Router.route('/secondline', {
  name: 'secondLine',
  onBeforeAction: function() {
    $('body').addClass('page');
    this.next();
  },
  onStop: function() {
    $('body').removeClass('page');
  }
});

Router.route('/research', {
  name: 'research',
  onBeforeAction: function() {
    $('body').addClass('page');
    this.next();
  },
  onStop: function() {
    $('body').removeClass('page');
  }
});

Router.route('/account', {
  name: 'account',
  onBeforeAction: function() {
    $('body').addClass('page');
    this.next();
  },
  onStop: function() {
    $('body').removeClass('page');
  }
});

Router.route('/', {name: 'about'});

})();
