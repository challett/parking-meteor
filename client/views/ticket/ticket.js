/**
 * Created by Connor on 11/9/2015.
 */
Template.ticket.helpers({
    printedTime: function () {
        return moment(this.createdAt).format('MMM D YYYY h:mm A')
    },
    endTime: function () {
        return moment(this.expirationTime).format('MMM D YYYY h:mm A')
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