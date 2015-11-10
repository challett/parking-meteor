/**
 * Created by Connor on 11/9/2015.
 */
Template.claimTicket.helpers({
    excessTime: function () {
        return moment(this.ticket.expirationTime).toNow(true)
    },
    hasTimeRemaining: function () {
        return moment(this.ticket.expirationTime).diff(moment()) > 0
    }
});

Template.claimTicket.events({
    'click .btn-got-it': function () {
        Tickets.update({_id: this.ticket._id},{$set: {claimed: true}});
        Vouchers.insert({timeAvailable: moment(this.ticket.expirationTime).diff(moment())});
        Router.go('start')
    }
});