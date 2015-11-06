/**
 * Created by Connor on 11/5/2015.
 */
Template.printTicket.helpers({
    timeAdded: function () {
    return Session.get('moneyInserted')
    },
    currentTime: function () {
        return moment().format('h:mm a')
    },
    endTime: function () {
        var moneyAdded = Session.get('moneyInserted');
        return moment().add(moneyAdded, 'hours').format('h:mm a')
    },
    timeDate: function () {
        return moment().format('MMMM Do YYYY, h:mm:ss a')
    }
});

Template.printTicket.events({
    'click .btn-done': function () {
        Router.go('start')
    }
});

Template.printTicket.rendered = function () {
    Meteor.setTimeout(function () {
        Router.go('start');
    }, 60000);
    $('#qrCode').qrcode({
        text: 'lolData',
        render: 'canvas',
        width: 128,
        height: 128,
        ecLevel: 'H',
        fill: "#910101",
        background: "#fafafa",
        radius: 0.2
    })
};