/**
 * Created by Connor on 11/9/2015.
 */
Template.claimTicket.helpers({
    excessTime: function () {
        var x =  moment(this.ticket.expirationTime).diff(moment(CurrentTime.get()));
        var d = moment.duration(x, 'milliseconds');
        var hours = Math.floor(d.asHours());
        var mins = Math.floor(d.asMinutes()) - hours * 60;
        return  hours + 'h ' + mins + 'm'
    },
    hasTimeRemaining: function () {
        return moment(this.ticket.expirationTime).diff(moment(CurrentTime.get())) > 60000
    }
});

Template.claimTicket.events({
    'click .btn-got-it': function () {
        Tickets.update({_id: this.ticket._id},{$set: {claimed: true}});
        Session.set('lastVoucherId',Vouchers.insert({timeAvailable: moment(this.ticket.expirationTime).diff(moment())}));
        Session.set('lastTicketId', '');
        var s = new Audio('print.wav').play();
        Router.go('start')
    }
});