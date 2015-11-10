/**
 * Created by Connor on 11/5/2015.
 */
Template.hardware.events({
    "submit .claim-voucher": function (event) {
        event.preventDefault();

        var text = event.target.text.value;

        Router.go('claimTicket', {_id: text});

        // Clear form
        event.target.text.value = "";
    }
});