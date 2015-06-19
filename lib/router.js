Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/flyfi', {name: 'flyfi'});
Router.route('/second-line', {name: 'secondLine'});
Router.route('/contact', {name: 'contact'});
Router.route('/blog', {name: 'blog'});
Router.route('/', {name: 'about'});