/**
 * Created by Connor on 11/10/2015.
 */
Template.weather.rendered = function(){
    var geooptions = {
        enableHighAccuracy: true,
        timeout: 600000,
        maximumAge: 0
    };

    function success(pos) {
        var lat = pos.coords.latitude;
        var lng = pos.coords.longitude;
        Meteor.call('getWeatherData', lat, lng, function (err, res) {
            if(!err){
                Session.set('weatherData', res)
            }
        });
    }

    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, geooptions);
        Meteor.setInterval(function () {
            console.log('weather data updated');
            navigator.geolocation.getCurrentPosition(success, error, geooptions);
        }, 600000); //Update weather every 10 min

    }
};

Template.weather.helpers({
    forecast: function () {
        var forecast = Session.get('weatherData');
        if (forecast && forecast.data && forecast.data.hourly_forecast) {
            return  lodash.slice(forecast.data.hourly_forecast, 0, 4);
        }
    }
});