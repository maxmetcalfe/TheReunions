// MapBox info
var mapStyle = "mapbox://styles/mapbox/dark-v9";
var startingZoom = 3;
var startingCenter = [-97.314835, 37.697948];

mapboxgl.accessToken = "pk.eyJ1IjoibWF4bWV0Y2FsZmUiLCJhIjoiY2o3aWhnazV5MXR3ZTJ3cXViYXRucWJocCJ9.b1B3HrGStBqybxmCEafK0Q"
var map = new mapboxgl.Map({
    container: "map", // container id
    style: mapStyle, // stylesheet location
    center: startingCenter, // starting position [lng, lat]
    zoom: startingZoom
});
map.addControl(new mapboxgl.NavigationControl());

map.on("load", function() {
  reunionData.reunions.features.forEach(function(reunion) {
    var el = document.createElement("div");
    el.className = "marker";
    el.id = reunion.properties.element_id;
    el.classList.add(reunion.properties.category);

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(reunion.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML("<h2>" + reunion.properties.location + "</h2><h3>" + reunion.properties.name + "</h3>"))
    .addTo(map);
  });
})