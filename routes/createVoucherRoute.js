/**
 * Created by Connor on 11/9/2015.
 */
HomeController = RouteController.extend({
    template: 'createVoucher',
    waitOn: function() {
    },
    data: function() {
    },
    before: function () {
        this.next();
    }
});

Router.route('/voucher/create', {
    name: 'createVoucher',
    controller: HomeController
});