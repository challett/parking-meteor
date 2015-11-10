/**
 * Created by Connor on 11/3/2015.
 */
Template.appLayout.events({
    'click .btn-back': function () {
        history.back()
    },
    'click .btn-done': function () {
        Router.go('start')
    },
    'click .french-button': function () {
        Session.set('language','french')
    },
    'click .english-button': function () {
        Session.set('language','english')
    }
});

Template.appLayout.helpers({
    showBackButton: function () {
        return !(lodash.includes(['start', 'printTicket'], Router.current().route.getName()))
    },
    showDoneButton: function () {
        return (lodash.includes(['printTicket'], Router.current().route.getName()))
    },
    showFrenchButton: function () {
        return Session.equals('language', 'english')
    },
    showEnglishButton: function () {
        return Session.equals('language', 'french')
    },
    currentTime: function () {
        return Template.instance().now.get().format('h:mm a');
    },
    timeDate: function () {
        return moment().format('MMMM Do YYYY')
    }
});

Template.appLayout.created = function () {
    this.now = new ReactiveVar(moment());
    var self = this;
    Meteor.setInterval(function() {
        self.now.set(moment());
    }, 60000);
};