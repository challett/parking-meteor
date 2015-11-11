/**
 * Created by Connor on 11/10/2015.
 */
var HomeController = RouteController.extend({
    template: 'enterPin',
    waitOn: function() {
    },
    data: function() {
        return {
            ticket: Tickets.findOne(this.params._id)
        }
    },
    before: function () {
        this.next();
    }
});

Router.route('/pin', {
    name: 'enterPin',
    controller: HomeController
});