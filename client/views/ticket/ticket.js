/**
 * Created by Connor on 11/9/2015.
 */
Template.ticket.helpers({
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

Template.ticket.rendered = function () {
    $('#qrCode').qrcode({
        text: Session.get('lastTicketId'),
        render: 'canvas',
        width: 80,
        height: 80,
        ecLevel: 'H',
        fill: "#910101",
        background: "#fafafa",
        radius: 0.2
    })
};