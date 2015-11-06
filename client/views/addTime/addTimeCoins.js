/**
 * Created by Connor on 11/3/2015.
 */
Template.addTimeCoins.created = function () {
    this.now = new ReactiveVar(moment());
    var self = this;
    Meteor.setInterval(function() {
        self.now.set(moment());
    }, 60000);

    Session.set('timeToAdd', 0);
};

Template.addTimeCoins.helpers({
    timeAdded: function () {
        return Session.get('moneyInserted').toFixed(2);
    },
    currentTime: function () {
        return Template.instance().now.get().format('h:mm a');
    },
    endTime: function () {
        var moneyAdded = Session.get('moneyInserted');
        return moment().add(moneyAdded, 'hours').format('h:mm a');
    }
});

Template.addTimeCoins.events({
    'click .btn-add-time': function () {
        //if (Session.get('timeToAdd'))
        Session.set('timeToAdd', Session.get('timeToAdd') + 30)
    },
    'click .btn-remove-time': function () {
        if (Session.get('timeToAdd') !== 0){
            Session.set('timeToAdd', Session.get('timeToAdd') - 30)
        }
    },
    'click .btn-print': function () {
        Router.go('printTicket')
    },
    'click .btn-loonie': function () {

        Session.set('moneyInserted', Session.get('moneyInserted') + 1);
    },
    'click .btn-toonie': function () {
        Session.set('moneyInserted', Session.get('moneyInserted') + 2);
    },
    'click .btn-quarter': function () {
        Session.set('moneyInserted', Session.get('moneyInserted') + 0.25);
    },
    'click .btn-dime': function () {
        Session.set('moneyInserted', Session.get('moneyInserted') + 0.1);
    },
    'click .btn-nickel': function () {
        Session.set('moneyInserted', Session.get('moneyInserted') + 0.05);
    }
});