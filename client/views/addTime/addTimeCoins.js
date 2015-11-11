/**
 * Created by Connor on 11/3/2015.
 */
Template.addTimeCoins.created = function () {
    Session.set('timeToAdd', 0);
};

Template.addTimeCoins.helpers({
    timeAdded: function () {
        return Session.get('moneyInserted').toFixed(2);
    },
    currentTime: function () {
        return  moment(CurrentTime.get()).format('h:mm a');
    },
    endTime: function () {
        var moneyAdded = Session.get('moneyInserted');
        return moment(CurrentTime.get()).add(moneyAdded, 'hours').add(Session.get('voucherTimeAdded') || 0).format('h:mm a');
    },
    voucherValue: function () {
        return (Session.get('voucherTimeAdded') / 3600000) ? (Session.get('voucherTimeAdded') / 3600000).toFixed(2) : 0;
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
        var moneyAdded = Session.get('moneyInserted');
        Session.set('lastTicketId',  Tickets.insert({
            expirationTime: moment().add(moneyAdded, 'hours').toDate()
        }));
        Router.go('printTicket')
    },

});