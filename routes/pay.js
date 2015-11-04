/**
 * Created by Connor on 11/3/2015.
 */
HomeController = RouteController.extend({
    template: 'pay',
    waitOn: function() {
    },
    data: function() {
    },
    before: function () {
        this.next();
    }
});

Router.route('/pay', {
    name: 'pay',
    controller: HomeController
});