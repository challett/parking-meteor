/**
 * Created by Connor on 11/10/2015.
 */
var options = {
    location: 50.850340+','+ 4.351710, // Brussels
    unit: 'c',
    success: function(weather) {
        html = '<h2><i class="sw icon-'+weather.code+'"></i> '
        html += weather.temp+'&deg;'+weather.units.temp+'</h2>';
        html += '<ul><li>'+weather.city+', '+weather.region +'</li>';
        html += '<li class="currently">'+weather.currently+'</li>';

        $("#weather").html(html);
    },
    error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
    }
}

Weather.options = options