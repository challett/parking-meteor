/**
 * Created by Connor on 11/5/2015.
 */
Template.addTimeCredit.helpers({
    timeAdded: function () {
        return Session.get('moneyInserted')
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
        var x = Session.get('voucherTimeAdded');
        var d = moment.duration(x, 'milliseconds');
        var hours = Math.floor(d.asHours());
        var mins = Math.floor(d.asMinutes()) - hours * 60;
        return hours + ' hours and ' + mins + ' minutes'
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
                expirationTime: moment(CurrentTime.get()).add(moneyAdded, 'hours').add(Session.get('voucherTimeAdded')).toDate()
            }));
            Session.set('voucherTimeAdded', 0);
            Router.go('printTicket')
        }
    }
});

Template.addTimeCredit.created = function () {
    Session.set('moneyInserted', 0);
};