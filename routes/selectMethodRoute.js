/**
 * Created by Connor on 11/3/2015.
 */
HomeController = RouteController.extend({
    template: 'selectPayment',
    waitOn: function() {
    },
    data: function() {
    },
    before: function () {
        this.next();
    }
});

Router.route('/select', {
    name: 'selectPayment',
    controller: HomeController
});