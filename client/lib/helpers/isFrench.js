/**
 * Created by Spencer on 2015-11-09.
 */
UI.registerHelper(
    'isFrench', function () {
        return Session.equals('language', 'french')
    }
);


