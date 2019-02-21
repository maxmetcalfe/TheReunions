import React, { Component } from "react";

var CLASS_NAME = "coin";
var SELECTED_CLASS_NAME = "coin selected";

class Coin extends Component {

  constructor(props) {
    super(props);
    this.reunions = props.reunions;
  }

  selectMemberReunionsByType(e) {
    // Unselect all reunions on the map.
    this.resetMap();
    // Send the selected element to the parent App.
    this.props.setSelection(this);
    // Tag this coin as selected.
    this.setState({selected: true});
    var self = this;
    e.reunions.forEach(function(reunion) {
      if (reunion.category === self.props.type) {
        var marker = document.getElementById(reunion.element_id);
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

  resetMap() {
    var selectedReunions = map.querySelectorAll(".picked");
    selectedReunions.forEach(function(r) {
      r.classList.remove("picked");
    })
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

export default Coin;
