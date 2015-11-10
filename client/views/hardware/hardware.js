/**
 * Created by Connor on 11/5/2015.
 */
Template.hardware.events({
    "submit .redeem-ticket": function (event) {
        event.preventDefault();

        var text = event.target.text.value;

        Router.go('claimTicket', {_id: text});

        // Clear form
        event.target.text.value = "";
    },
    "submit .claim-voucher": function (event) {
        event.preventDefault();

        var text = event.target.text.value;
        var voucher = Vouchers.findOne(text);
        if (voucher && !voucher.claimed && voucher.timeAvailable) {
            Session.set('voucherTimeAdded', Session.get('voucherTimeAdded') || 0 + voucher.timeAvailable)
        }

        // Clear form
        event.target.text.value = "";
    }
});

Template.hardware.helpers({
    currentTicket: function () {
        return Tickets.findOne(Session.get('lastTicketId'));
    }
});