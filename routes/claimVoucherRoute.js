/**
 * Created by Connor on 11/9/2015.
 */
HomeController = RouteController.extend({
    template: 'claimTicket',
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

Router.route('/ticket/:_id', {
    name: 'claimTicket',
    controller: HomeController
});