/**
 * Created by Connor on 11/3/2015.
 */
HomeController = RouteController.extend({
    template: 'printTicket',
    waitOn: function() {
    },
    data: function() {
    },
    before: function () {
        this.next();
    }
});

Router.route('/print', {
    name: 'printTicket',
    controller: HomeController
});