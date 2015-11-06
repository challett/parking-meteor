/**
 * Created by Connor on 11/3/2015.
 */
Template.appLayout.events({
    'click .btn-back': function () {
        history.back()
    },
    'click .btn-done': function () {
        Router.go('start')
    }
});

Template.appLayout.helpers({
    showBackButton: function () {
        return !(lodash.includes(['start', 'printTicket'], Router.current().route.getName()))
    },
    showDoneButton: function () {
        return (lodash.includes(['printTicket'], Router.current().route.getName()))
    }
});