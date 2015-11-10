/**
 * Created by Connor on 11/10/2015.
 */
Template.weather.rendered = function(){
    this.weatherData = new ReactiveVar();
    var self = this;
    var geooptions = {
        enableHighAccuracy: true,
        timeout: 60000,
        maximumAge: 0
    };

    function success(pos) {
        var lat = pos.coords.latitude;
        var lng = pos.coords.longitude;
        Meteor.call('getWeatherData', lat, lng, function (err, res) {
            if(!err){
                self.weatherData.set(res);
                Session.set('weatherData', self.weatherData.get())
            }
        });
    }

    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, geooptions);
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