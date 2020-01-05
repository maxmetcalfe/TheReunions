import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import constants from "../constants";
import { selectReunions } from "../actions";

var CLASS_NAME = "coin";
var SELECTED_CLASS_NAME = "coin selected";

export class Coin extends Component {

  constructor(props) {
    super(props);
    this.reunions = props.reunions;
  }

  componentDidMount() {
    this.map = document.getElementById("map");
  }

  selectMemberReunionsByType(e) {
    var selectedReunions = [];
    var self = this;
    e.reunions.forEach(function(reunion) {
      if (constants.CATEGORIES[reunion.properties.category] === self.props.type) {
        selectedReunions.push(reunion);
        var marker = document.getElementById(reunion.properties.element_id);
        marker.classList.add("picked");
      }
    })
    // Dispatch the selection.
    this.props.dispatch(selectReunions({ reunions: selectedReunions, element: this }));
    // Tag this coin as selected.
    this.setState({ selected: true });
  }

  className() {
    if (this.displayAsSelected()) {
      return SELECTED_CLASS_NAME + " " + this.props.type;
    }
    return CLASS_NAME + " " + this.props.type;
  }

  displayAsSelected() {
    if (this.props.selection && this.props.id === this.props.selection.element.props.id) {
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
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = (data, dispatch) => {
  return { data, dispatch: dispatch };
};

export default connect(
  mapStateToProps
)(Coin);
