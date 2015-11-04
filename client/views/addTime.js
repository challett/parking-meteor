/**
 * Created by Connor on 11/3/2015.
 */
Template.addTime.created = function () {
    this.now = new ReactiveVar(moment());
    var self = this;
    Meteor.setInterval(function() {
        self.now.set(moment());
    }, 60000);

    Session.set('timeToAdd', 0);
};

Template.addTime.helpers({
    timeAdded: function () {
        return Session.get('timeToAdd')
    },
    currentTime: function () {
        return Template.instance().now.get().format('h:mm a')
    },
    endTime: function () {
        var timeToAdd = Session.get('timeToAdd');
        return moment().add(timeToAdd, 'minutes').format('h:mm a')
    }
});

Template.addTime.events({
    'click .btn-add-time': function () {
        //if (Session.get('timeToAdd'))
        Session.set('timeToAdd', Session.get('timeToAdd') + 30)
    },
    'click .btn-remove-time': function () {
        if (Session.get('timeToAdd') !== 0){
            Session.set('timeToAdd', Session.get('timeToAdd') - 30)
        }
    },
    'click .btn-payment': function () {
        Router.go('selectPayment')
    }
});