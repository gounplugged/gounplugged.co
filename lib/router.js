Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/flyfi', {name: 'flyfi'});
Router.route('/second-line', {name: 'secondLine'});
Router.route('/research', {name: 'research'});
Router.route('/blog', {name: 'blog'});
Router.route('/', {name: 'about'});