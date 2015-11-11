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
    'click .btn-loonie': function () {
        if (lodash.includes(['start'], Router.current().route.getName())){
            Session.set('moneyInserted', Session.get('moneyInserted') + 1);
            Router.go('addTimeCoins')
        } else if (lodash.includes(['addTimeCoins'], Router.current().route.getName())){
            Session.set('moneyInserted', Session.get('moneyInserted') + 1);
        }
    },
    'click .btn-toonie': function () {
        if (lodash.includes(['start'], Router.current().route.getName())){
            Session.set('moneyInserted', Session.get('moneyInserted') + 2);
            Router.go('addTimeCoins')
        } else if (lodash.includes(['addTimeCoins'], Router.current().route.getName())){
            Session.set('moneyInserted', Session.get('moneyInserted') + 2);
        }
    },
    'click .btn-quarter': function () {
        if (lodash.includes(['start'], Router.current().route.getName())){
            Session.set('moneyInserted', Session.get('moneyInserted') + 0.25);
            Router.go('addTimeCoins')
        } else if (lodash.includes(['addTimeCoins'], Router.current().route.getName())){
            Session.set('moneyInserted', Session.get('moneyInserted') + 0.25);
        }
    },
    'click .btn-dime': function () {
        if (lodash.includes(['start'], Router.current().route.getName())){
            Session.set('moneyInserted', Session.get('moneyInserted') + 0.10);
            Router.go('addTimeCoins')
        } else if (lodash.includes(['addTimeCoins'], Router.current().route.getName())){
            Session.set('moneyInserted', Session.get('moneyInserted') + 0.10);
        }
    },
    'click .btn-nickel': function () {
        if (lodash.includes(['start'], Router.current().route.getName())){
            Session.set('moneyInserted', Session.get('moneyInserted') + 0.05);
            Router.go('addTimeCoins')
        } else if (lodash.includes(['addTimeCoins'], Router.current().route.getName())){
            Session.set('moneyInserted', Session.get('moneyInserted') + 0.05);
        }
    },
    'click .btn-debit': function () {
        if (lodash.includes(['start'], Router.current().route.getName())) {
            Router.go('enterPin')
        }
    },
    'click .btn-credit': function () {
        if (lodash.includes(['start'], Router.current().route.getName())) {
            Router.go('enterPin')
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