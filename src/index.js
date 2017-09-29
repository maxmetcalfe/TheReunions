var React = require("react");
var ReactDOM = require("react-dom");

import MemberTable from './components/MemberTable';

var members = ["m", "g", "j", "d"];

ReactDOM.render(<MemberTable members=members />, document.getElementById("panel"));

// MapBox info
var mapStyle = "mapbox://styles/mapbox/basic-v9";
var startingZoom = 10;
var startingCenter = [-90.0715323, 29.95106579999999];

mapboxgl.accessToken = "pk.eyJ1IjoibWF4bWV0Y2FsZmUiLCJhIjoiY2o3aWhnazV5MXR3ZTJ3cXViYXRucWJocCJ9.b1B3HrGStBqybxmCEafK0Q"
var map = new mapboxgl.Map({
    container: "map", // container id
    style: mapStyle, // stylesheet location
    center: startingCenter, // starting position [lng, lat]
    zoom: startingZoom
});
map.addControl(new mapboxgl.NavigationControl());

map.on('load', function() {
  reunions.features.forEach(function(marker) {
    var el = document.createElement('div');
    el.className = "marker";
    el.classList.add(marker.properties.category);
    
    el.addEventListener("click", function(event) {
        console.log("Clicked")
    })

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
  });
})
