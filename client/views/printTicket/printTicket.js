/**
 * Created by Connor on 11/5/2015.
 */
Template.printTicket.helpers({
    timeAdded: function () {
        //returns number to two decimal places
        return parseFloat(Math.round(Session.get('moneyInserted')*100)/100).toFixed(2)
    },
    currentTime: function () {
        return moment().format('h:mm a')
    },
    endTime: function () {
        var moneyAdded = Session.get('moneyInserted');
        return moment().add(moneyAdded, 'hours').format('h:mm a')
    },
    timeDate: function () {
        return moment().format('MMMM Do YYYY')
    },
    ticketId: function () {
        return Session.get('lastTicketId');
    }
});

Template.printTicket.events({

});

Template.printTicket.rendered = function () {
    Meteor.setTimeout(function () {
        Router.go('start');
    }, 60000);
    $('#qrCode').qrcode({
        text: Session.get('lastTicketId'),
        render: 'canvas',
        width: 128,
        height: 128,
        ecLevel: 'H',
        fill: "#910101",
        background: "#fafafa",
        radius: 0.2
    })
};