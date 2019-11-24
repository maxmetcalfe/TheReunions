import React, { Component } from "react";
import PropTypes from "prop-types";
import resetMap from "../utils/resetMap"
import constants from "../constants";

var CLASS_NAME = "coin";
var SELECTED_CLASS_NAME = "coin selected";

class Coin extends Component {

  constructor(props) {
    super(props);
    this.reunions = props.reunions;
  }

  componentDidMount() {
    this.map = document.getElementById("map");
  }

  selectMemberReunionsByType(e) {
    // Unselect all reunions on the map.
    resetMap(this.map);
    // Send the selected element to the parent App.
    this.props.setSelection(this);
    // Tag this coin as selected.
    this.setState({selected: true});
    var self = this;
    e.reunions.forEach(function(reunion) {
      if (constants.CATEGORIES[reunion.properties.category] === self.props.type) {
        var marker = document.getElementById(reunion.properties.element_id);
        marker.classList.add("picked");
      }
    })
  }

  className() {
    if (this.displayAsSelected()) {
      return SELECTED_CLASS_NAME + " " + this.props.type;
    }
    return CLASS_NAME + " " + this.props.type;
  }

  displayAsSelected() {
    if (this.props.selection && this.props.id === this.props.selection.props.id) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className={this.className()} onClick={()=>{this.selectMemberReunionsByType(this.props)}}>{this.props.counts}</div>
    );
  }
}

Coin.propTypes = {
  counts: PropTypes.number,
  reunions: PropTypes.array,
  selection: PropTypes.object,
  setSelection: PropTypes.func,
  type: PropTypes.string.isRequired,
  id: PropTypes.string
};

export default Coin;
