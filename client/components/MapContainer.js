import React, { Component } from "react";
import PropTypes from "prop-types";
import MemberTable from './MemberTable';
import constants from "../constants";
import resetMap from "../utils/resetMap"

const STARTING_CENTER = new mapkit.Coordinate(37.697948, -97.314835)

class MapContainer extends Component {

  constructor() {
    super();
    this.state = { panelVisible: true };
    window.mapContainer = this;
  }

  componentDidMount() {
    mapkit.init({
      authorizationCallback: function(done) {
        fetch("/api/token")
        .then(res => res.text())
        .then(done);
      },
    });

    var map = new mapkit.Map("map", {
      center: STARTING_CENTER,
      colorScheme: mapkit.Map.ColorSchemes.Dark
    });

    this.map = map;
    this.mapElement = document.getElementById("map");

    var annotations = [];
    this.props.reunions.features.forEach(function(reunion) {
      if (!reunion.properties.location) {
        return;
      }
      var annotationCoordinate = new mapkit.Coordinate(parseFloat(reunion.geometry.coordinates[1]), parseFloat(reunion.geometry.coordinates[0]));
      var annotation = new mapkit.MarkerAnnotation(annotationCoordinate, {
        title: reunion.properties.location,
        color: constants.MARKER_COLORS[reunion.properties.category],
        glyphColor: constants.MARKER_GLYPH_COLOR,
        data: {
          category: constants.CATEGORIES[reunion.properties.category],
          members: reunion.properties.members
        }
      })
      annotations.push(annotation);
    })
    map.showItems(annotations);
  }

  selectReunions(selection) {
    var selectedAnnotations;
    if (selection.category) {
      selectedAnnotations = this.map.annotations.filter(function(annotation) { return annotation.data.category === selection.category });
    } else if (selection.member) {
      selectedAnnotations = this.map.annotations.filter(function(annotation) { return annotation.data.members.indexOf(selection.member.toUpperCase())});
    }
    this.map.showItems(selectedAnnotations);
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
      if (this.props.selection && this.mapElement) {
          resetMap(this.mapElement);
          this.selectReunions(this.props.selection);
      }
      return (
        <div id="map-container">
          <div id="map"></div>
          <div id="show-panel-button" onClick={this.showPanel.bind(this)}>SHOW PANEL</div>
          <div id="panel" className={this.state.panelVisible ? "side-panel" : "side-panel hide"}>
            <MemberTable summaryCounts={this.props.summaryCounts}
              reunionsForMember={this.props.reunionsForMember}
              selection={this.props.selection}
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
  reunions: PropTypes.object
}

export default MapContainer;
