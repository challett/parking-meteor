/**
 * Created by Connor on 11/11/2015.
 */
Template.footer.helpers({
    showBackButton: function () {
        return !(lodash.includes(['start', 'printTicket'], Router.current().route.getName()))
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
        return (lodash.includes(['start'], Router.current().route.getName()))
    }
});