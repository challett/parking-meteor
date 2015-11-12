/**
 * Created by Connor on 11/11/2015.
 */
Template.map.rendered = function () {
    var geooptions = {
        enableHighAccuracy: true,
        timeout: 60000,
        maximumAge: 0
    };
    var contentString = '<div style="color:#000">You are here</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
            var lat = pos.coords.latitude;
            var lng = pos.coords.longitude;

            var trafficLayer = new google.maps.TrafficLayer();

            var marker = new google.maps.Marker({
                position: {lat: lat, lng: lng},
                map: map,
                title: 'You Are Here',
                animation: google.maps.Animation.DROP
            });
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: {lat: lat, lng: lng}
            });
            marker.addListener('click', function toggleBounce() {
                infowindow.open(map, marker);

            });
            trafficLayer.setMap(map);
            marker.setMap(map);
        }, function (err) {
            console.warn(err)}, geooptions);
    }


};