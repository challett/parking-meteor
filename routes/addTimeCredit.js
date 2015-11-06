/**
 * Created by Connor on 11/5/2015.
 */
HomeController = RouteController.extend({
    template: 'addTimeCredit',
    waitOn: function() {
    },
    data: function() {
    },
    before: function () {
        this.next();
    }
});

Router.route('/addtime/credit', {
    name: 'addTimeCredit',
    controller: HomeController
});