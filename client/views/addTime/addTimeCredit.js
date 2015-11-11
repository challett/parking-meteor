/**
 * Created by Connor on 11/5/2015.
 */
Template.addTimeCredit.helpers({
    timeAdded: function () {
        return Session.get('moneyInserted') + " hours"
    },
    noMoneyInserted: function () {
        return !(Session.get('moneyInserted'))
    },
    currentTime: function () {
        return moment(CurrentTime.get()).format('h:mm a')
    },
    endTime: function () {
        var moneyAdded = Session.get('moneyInserted');
        return moment(CurrentTime.get()).add(moneyAdded, 'hours').add(Session.get('voucherTimeAdded') || 0).format('h:mm a')
    },
    voucherValue: function () {
        return (Session.get('voucherTimeAdded') / 3600000) ? (Session.get('voucherTimeAdded') / 3600000).toFixed(2) : 0;
    }
});

Template.addTimeCredit.events({
    'click .btn-add-time': function () {
        Session.set('moneyInserted', Session.get('moneyInserted') + 0.5)
    },
    'click .btn-remove-time': function () {
        if (Session.get('moneyInserted') !== 0){
            Session.set('moneyInserted', Session.get('moneyInserted') - 0.5)
        }
    },
    'click .btn-print': function () {
        var moneyAdded = Session.get('moneyInserted');
        if (moneyAdded !== 0) {
            Session.set('lastTicketId', Tickets.insert({
                expirationTime: moment().add(moneyAdded, 'hours').toDate()
            }));
            Router.go('printTicket')
        }
    }
});

Template.addTimeCredit.created = function () {
    Session.set('moneyInserted', 0);
};