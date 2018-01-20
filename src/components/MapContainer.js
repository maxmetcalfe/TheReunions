import React, { Component } from "react";
import MemberTable from './MemberTable';

// MapBox info
var mapStyle = "mapbox://styles/mapbox/dark-v9";
var startingZoom = 3;
var startingCenter = [-97.314835, 37.697948];
mapboxgl.accessToken = "pk.eyJ1IjoibWF4bWV0Y2FsZmUiLCJhIjoiY2o3aWhnazV5MXR3ZTJ3cXViYXRucWJocCJ9.b1B3HrGStBqybxmCEafK0Q"

class MapContainer extends Component {

  componentDidMount() {
    var map = new mapboxgl.Map({
        container: "map", // container id
        style: mapStyle, // stylesheet location
        center: startingCenter, // starting position [lng, lat]
        zoom: startingZoom
    });
    map.addControl(new mapboxgl.NavigationControl());
    var self = this;
    map.on("load", function() {
      self.props.reunions.features.forEach(function(reunion) {

        // Create outer element to handle click area.
        var elementOuter = document.createElement("div");
        elementOuter.className = "marker";
        elementOuter.id = reunion.properties.element_id;

        // Create inner element for the actual marker dislay.
        var elementInner = document.createElement("div");
        elementInner.classList.add(reunion.properties.category);

        // Add the inner element to the outer element.
        elementOuter.appendChild(elementInner);

        // Hack: Popouts were not working with touch event.
        // Adding an empty event listener fixes the problem :)
        elementOuter.addEventListener("click", function() {});

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(elementOuter)
        .setLngLat(reunion.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
        .setHTML("<h2>" + reunion.properties.location + "</h2><h3>" + reunion.properties.name + "</h3>"))
        .addTo(map);
      });
    })
  }

  render() {
      return (
        <div id="map-container">
          <div id="map"></div>
          <div id="panel" className="side-panel">
            <MemberTable summaryCounts={this.props.summaryCounts} reunionsForMember={this.props.reunionsForMember} selection={this.props.selection} setSelection={this.props.setSelection.bind(this)} />
           </div>
        </div>
      );
  }
}

export default MapContainer;
