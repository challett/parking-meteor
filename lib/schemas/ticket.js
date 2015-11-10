/**
 * Created by Connor on 11/9/2015.
 */
Tickets = new Ground.Collection('tickets');

var schema;
schema = new SimpleSchema({
    expirationTime: {
        type: Date
    },
    claimed: {
        type: Boolean,
        defaultValue: false
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            }
        }
    }
});

Tickets.attachSchema(schema);