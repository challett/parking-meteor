/**
 * Created by Connor on 11/3/2015.
 */
Template.addTimeCoins.created = function () {
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
        var x = Session.get('voucherTimeAdded');
        var d = moment.duration(x, 'milliseconds');
        var hours = Math.floor(d.asHours());
        var mins = Math.floor(d.asMinutes()) - hours * 60;
        return hours + ' hours and ' + mins + ' minutes'
    }
});

Template.addTimeCoins.events({
    'click .btn-print': function () {
        var moneyAdded = Session.get('moneyInserted');
        if (moneyAdded !== 0) {
            Session.set('lastTicketId',  Tickets.insert({
                expirationTime: moment(CurrentTime.get()).add(moneyAdded, 'hours').add(Session.get('voucherTimeAdded')).toDate()
            }));
            Session.set('voucherTimeAdded', 0);
            var s = new Audio('print.wav').play();
            Router.go('printTicket')
        }
    },

});