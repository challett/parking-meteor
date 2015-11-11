/**
 * Created by Connor on 11/10/2015.
 */
Meteor.methods({
    'getWeatherData': function (lat, lng) {
        //return HTTP.call('get',
        //    'http://api.wunderground.com/api/' + Meteor.settings.private.weather.key + '/hourly/q/' + lat + ',' + lng + '.json');
        return {}
    }
});