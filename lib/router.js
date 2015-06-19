Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/flyfi', {name: 'flyfi'});
Router.route('/secondline', {
  name: 'secondLine',
  onBeforeAction: function() {
    $('body').addClass('page');
    this.next();
  },
  onStop: function() {
    $('body').removeClass('page');
  },
});
Router.route('/research', {name: 'research'});
Router.route('/blog', {name: 'blog'});

Router.route('/', {name: 'about'});