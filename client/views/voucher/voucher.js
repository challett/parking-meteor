/**
 * Created by Connor on 11/11/2015.
 */
Template.voucher.rendered = function () {
    $('#qrCode').qrcode({
        text: Session.get('lastVoucherId'),
        render: 'canvas',
        width: 80,
        height: 80,
        ecLevel: 'H',
        fill: "#910101",
        background: "#fafafa",
        radius: 0.2
    })
};

Template.voucher.helpers({
    time: function () {
        var x = this.timeAvailable;
        var d = moment.duration(x, 'milliseconds');
        var hours = Math.floor(d.asHours());
        var mins = Math.floor(d.asMinutes()) - hours * 60;
        return hours + 'h ' + mins + 'm'
    }
});