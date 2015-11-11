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
    },
    'click .btn-map': function () {
        Router.go('map')
    },
    'click .number': function () {
        Template.instance().audio.play()
    },
    'click .correction': function () {
        Template.instance().audio.play()
    },
    'click .submit': function () {
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
        return moment(CurrentTime.get()).format('h:mm A');
    },
    timeDate: function () {
        return  moment(CurrentTime.get()).format('MMM D YYYY')
    },
    showMapButton: function () {
        return !(lodash.includes(['map'], Router.current().route.getName()))
    }
});

Template.appLayout.created = function () {
    //Meteor.setInterval(function() {
    //    Session.set('currentTime', moment());
    //}, 6000);

    this.audio = new Audio('beep.wav');
};