/**
 * Created by Connor on 11/3/2015.
 */
Template.pay.helpers({
    amountDue: function () {
        var timeAdded = Session.get('timeToAdd');
        return '$'+ timeAdded / 30 * 3 + ".00";
    }
});

