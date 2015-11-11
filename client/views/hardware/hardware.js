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
    },
    'click .btn-coin': function (e) {
        if (lodash.includes(['start'], Router.current().route.getName())) {
            Session.set('moneyInserted', parseFloat(e.target.id));
            Router.go('addTimeCoins')
        } else if (lodash.includes(['addTimeCoins'], Router.current().route.getName())) {
            Session.set('moneyInserted', Session.get('moneyInserted') + parseFloat(e.target.id));
        } else if (lodash.includes(['map'], Router.current().route.getName())) {
            Session.set('moneyInserted', parseFloat(e.target.id));
            Router.go('addTimeCoins', {}, {replaceState: true})
        }
    },
    'click .btn-plastic': function () {
        if (lodash.includes(['start'], Router.current().route.getName())) {
            Router.go('enterPin')
        } else if (lodash.includes(['map'], Router.current().route.getName())) {
            Router.go('enterPin', {}, {replaceState: true})
        }
    }
});

Template.hardware.helpers({
    currentTicket: function () {
        return Tickets.findOne(Session.get('lastTicketId'));
    },
    coinsDisabled: function () {
        return (lodash.includes(['enterPin','addTimeCredit','print'], Router.current().route.getName()))
    },
    plasticDisabled: function () {
        return !(lodash.includes(['map', 'start', 'claimTicket'], Router.current().route.getName()))
    }
});