/**
 * Created by Connor on 11/11/2015.
 */
var HomeController = RouteController.extend({
    template: 'map',
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

Router.route('/map', {
    name: 'map',
    controller: HomeController
});