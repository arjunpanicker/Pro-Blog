function findMe() {
    var output = document.getElementById("yourLoc");

    if (!navigator.geolocation) {
        output.innerHTML("<p>Sorry, the geolocation Service is not supported by your browser.</p>");
        return;
    }

    function successPositionCallback(position) {

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var loc = { lat: latitude, lng: longitude };
        console.log(loc);

        var map2 = new google.maps.Map(document.getElementById('yourLoc'), {
            zoom: 18,
            center: loc
        });

        var marker2 = new google.maps.Marker({
            position: loc,
            map: map2
        })

        // output.innerHTML = "<p> Latitude: " + latitude + "&deg;, Longitude: " + longitude + "&deg;</p>";

        // var img = new Image();
        // img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&markers=color:red%7Clabel:A%7C&zoom=18&size=400x400&key=AIzaSyChFRGD_TUgexfXt7nwK6p3KllHPZsDaJY";
        // output.appendChild(img);

    }

    function errorPositionCallback(error) {
        output.innerHTML = "Unable to retreive your location!!";
    }

    output.innerHTML = "<p> Locating... </p>";

    navigator.geolocation.getCurrentPosition(successPositionCallback, errorPositionCallback);

}