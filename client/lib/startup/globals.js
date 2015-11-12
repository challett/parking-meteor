/**
 * Created by Connor on 11/11/2015.
 */
CurrentTime = new ReactiveVar(moment());
Meteor.setInterval(function() {
    CurrentTime.set(moment());
}, 6000);