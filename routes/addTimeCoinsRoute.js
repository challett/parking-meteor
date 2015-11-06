/**
 * Created by Connor on 11/3/2015.
 */
HomeController = RouteController.extend({
    template: 'addTimeCoins',
    waitOn: function() {
    },
    data: function() {
    },
    before: function () {
        this.next();
    }
});

Router.route('/addtime/coins', {
    name: 'addTimeCoins',
    controller: HomeController
});