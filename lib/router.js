Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/flyfi', {name: 'flyfi'});
Router.route('/second-line', {name: 'secondLine'});
Router.route('/research', {name: 'research'});
Router.route('/blog', {
  name: 'blog',
  waitOn: function(){
        return [IRLibLoader.load('https://static.medium.com/embed.js')];
    }
});

Router.route('/', {name: 'about'});