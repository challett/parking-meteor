Template.start.events({
  'click .btn-debit': function () {
    Router.go('addTimeCredit')
  },
  'click .btn-credit': function () {
    Router.go('addTimeCredit')
  },
  'click .btn-loonie': function () {
      Session.set('moneyInserted', 1);
      Router.go('addTimeCoins')
  },
  'click .btn-toonie': function () {
      Session.set('moneyInserted', 2);
      Router.go('addTimeCoins')
  },
  'click .btn-quarter': function () {
      Session.set('moneyInserted', 0.25);
      Router.go('addTimeCoins')
  },
  'click .btn-dime': function () {
      Session.set('moneyInserted', 0.1);
      Router.go('addTimeCoins')
  },
  'click .btn-nickel': function () {
      Session.set('moneyInserted', 0.05);
      Router.go('addTimeCoins')
  }
});