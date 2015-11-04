Session.set('counter', 0)
Template.start.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.start.events({
  'click .btn-start': function () {
    Router.go('addTime');
  }
});
