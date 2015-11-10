/**
 * Created by Connor on 11/9/2015.
 */
Vouchers = new Ground.Collection('voucher');

var schema = new SimpleSchema({
    timeAvailable: {
        type: Number
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

Vouchers.attachSchema(schema);