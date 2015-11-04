/**
 * Created by Connor on 11/3/2015.
 */
Template.selectPayment.events({
    'click .btn-debit': function () {
        Router.go('pay')
    },
    'click .btn-credit': function () {
        Router.go('pay')
    }
});