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
    },
    'click .btn': function () {
        Template.instance().audio.play()
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
        return moment(CurrentTime.get()).format('h:mm a');
    },
    timeDate: function () {
        return  moment(CurrentTime.get()).format('MMM Do YYYY')
    }
});

Template.appLayout.created = function () {
    //Meteor.setInterval(function() {
    //    Session.set('currentTime', moment());
    //}, 6000);

    this.audio = new buzz.sound('beep.wav');
};