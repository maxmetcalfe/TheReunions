import React, { Component } from "react";
import PropTypes from "prop-types";
import MemberTable from './MemberTable';
import constants from "../constants";

// MapBox info
var mapStyle = "mapbox://styles/mapbox/dark-v9";
var startingZoom = 3;
var startingCenter = [-97.314835, 37.697948];
mapboxgl.accessToken = "pk.eyJ1IjoibWF4bWV0Y2FsZmUiLCJhIjoiY2o3aWhnazV5MXR3ZTJ3cXViYXRucWJocCJ9.b1B3HrGStBqybxmCEafK0Q"

class MapContainer extends Component {

  constructor() {
    super();
    this.state = { panelVisible: true };
    window.mapContainer = this;
  }

  componentDidMount() {
    var map = new mapboxgl.Map({
        container: "map", // container id
        style: mapStyle, // stylesheet location
        center: startingCenter, // starting position [lng, lat]
        zoom: startingZoom
    });
    map.addControl(new mapboxgl.NavigationControl());
    this.map = map;
    this.mapElement = document.getElementById("map");
    var self = this;
    map.on("load", function() {
      self.props.reunions.features.forEach(function(reunion) {

        if (!reunion.properties.location) {
          return;
        }

        // Create outer element to handle click area.
        var elementOuter = document.createElement("div");
        elementOuter.className = "marker";
  
        // Create inner element for the actual marker dislay.
        var elementInner = document.createElement("div");
        elementInner.classList.add(constants.CATEGORIES[reunion.properties.category] || constants.CATEGORIES["Cat 4"]);
        elementInner.id = reunion.properties.element_id;
  
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

  hidePanel() {
    this.setState({ panelVisible: false });
    this.mapElement.classList.add("full");
    this.map.resize();
  }

  showPanel() {
    this.setState({ panelVisible: true });
    this.mapElement.classList.remove("full");
    this.map.resize();
  }

  render() {
      return (
        <div id="map-container">
          <div id="map"></div>
          <div id="show-panel-button" onClick={this.showPanel.bind(this)}>SHOW PANEL</div>
          <div id="panel" className={this.state.panelVisible ? "side-panel" : "side-panel hide"}>
            <MemberTable summaryCounts={this.props.summaryCounts}
              reunionsForMember={this.props.reunionsForMember}
              selection={this.props.selection}
              setSelection={this.props.setSelection.bind(this)}
            />
            <div id="panel-slider" onClick={this.hidePanel.bind(this)}>
              <div></div>
            </div>
           </div>
        </div>
      );
  }
}

MapContainer.propTypes = {
  summaryCounts: PropTypes.object.isRequired,
  reunionsForMember: PropTypes.object.isRequired,
  selection: PropTypes.object,
  setSelection: PropTypes.func
}

export default MapContainer;
