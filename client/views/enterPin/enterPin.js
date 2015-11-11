/**
 * Created by Connor on 11/10/2015.
 */
Template.enterPin.helpers({
    numbers: function () {
        return [
            1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'
        ]
    },
    pinError: function () {
        return Session.get('pinError')
    },
    asterisks: function () {
        var astString = ' ';
        lodash.times(Session.get('enteredPin').length, function(n) {
            astString += '*'
        });
        return astString;
    }
});

Template.enterPin.events({
    'click .number': function (event) {
        var numberPressed = event.target.id;
        Session.set('enteredPin', Session.get('enteredPin') + numberPressed);
        Session.set('pinError', '')
    },
    'click .submit': function () {
        if (Session.get('enteredPin') === '1234') {
            Router.go('addTimeCredit');
        } else {
            Session.set('enteredPin', '')
            Session.set('pinError', 'Your pin is incorrect, please try again')
        }
    },
    'click .correction': function () {
        Session.set('enteredPin', lodash.dropRight(Session.get('enteredPin')))
    }

});

Template.enterPin.created = function () {
    Session.set('enteredPin', '');
    Session.set('pinError', '')
};
