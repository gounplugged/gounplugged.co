Template.navbar.helpers({
  activeClass: function(path) {
    return (path == Router.current().route.path()) ? "active" : "";
  }
});