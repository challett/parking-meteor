/**
 * Created by Connor on 11/3/2015.
 */
HomeController = RouteController.extend({
    template: 'addTime',
    waitOn: function() {
    },
    data: function() {
    },
    before: function () {
        this.next();
    }
});

Router.route('/addtime', {
    name: 'addTime',
    controller: HomeController
});