/**
 * Created by Connor on 11/3/2015.
 */
HomeController = RouteController.extend({
    template: 'start',
    waitOn: function() {
    },
    data: function() {
    },
    before: function () {
        this.next();
    }
});

Router.route('/', {
    name: 'start',
    controller: HomeController
});