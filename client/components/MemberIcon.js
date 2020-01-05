import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectReunions } from "../actions";

var CLASS_NAME = "member-icon";
var SELECTED_CLASS_NAME = "member-icon selected";

export class MemberIcon extends Component {

  constructor(props) {
    super(props);
    this.reunions = props.reunions;
  }

  componentDidMount() {
    this.map = document.getElementById("map");
  }

  selectMemberReunions(e) {
    // Dispatch the selection.
    this.props.dispatch(selectReunions({ reunions: e.reunions, element: this }));
  }

  displayAsSelected() {
    if (this.props.selection && this.props.id === this.props.selection.element.props.id) {
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
  dispatch: PropTypes.func
}

const mapStateToProps = (dispatch) => {
  return { dispatch: dispatch };
};

export default connect(
  mapStateToProps
)(MemberIcon);

