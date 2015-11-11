/**
 * Created by Connor on 11/11/2015.
 */
Template.map.rendered = function () {
    var geooptions = {
        enableHighAccuracy: true,
        timeout: 60000,
        maximumAge: 0
    };
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
            var lat = pos.coords.latitude;
            var lng = pos.coords.longitude;
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: {lat: lat, lng: lng}
            });
            var trafficLayer = new google.maps.TrafficLayer();
            trafficLayer.setMap(map);
            var marker = new google.maps.Marker({
                position: {lat: lat, lng: lng},
                map: map,
                title: 'You Are Here'
            });
        }, function (err) {
            console.warn(err)}, geooptions);
    }


};