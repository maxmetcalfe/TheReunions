import React, { Component } from "react";
import PropTypes from "prop-types";
import resetMap from "../utils/resetMap"

var CLASS_NAME = "member-icon";
var SELECTED_CLASS_NAME = "member-icon selected";

class MemberIcon extends Component {

  constructor(props) {
    super(props);
    this.reunions = props.reunions;
    this.state = {selected: false};
  }

  componentDidMount() {
    this.map = document.getElementById("map");
  }

  selectMemberReunions(e) {
    // Unselect all reunions on the map.
    resetMap(this.map);
    // Send the selected element to the parent App.
    this.props.setSelection(this);
    // Tag this MemberIcon as selected.
    this.setState({selected: true});
    e.reunions.forEach(function(reunion) {
        var marker = document.getElementById(reunion.properties.element_id);
        marker.classList.add("picked");
    })
  }

  displayAsSelected() {
    if (this.props.selection && this.props.id === this.props.selection.props.id) {
      return true;
    }
    return false;
  }

  render() {
    var text = this.props.text.toUpperCase();
    return (
      <div className={this.displayAsSelected() ? SELECTED_CLASS_NAME : CLASS_NAME} onClick={()=>{this.selectMemberReunions(this.props)}}>
        {text}
      </div>
    );
  }
}

MemberIcon.propTypes = {
  reunions: PropTypes.array,
  text: PropTypes.string.isRequired,
  id: PropTypes.string,
  selection: PropTypes.object,
  setSelection: PropTypes.func
}

export default MemberIcon;
