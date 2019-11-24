import React, { Component } from "react";
import PropTypes from "prop-types";
import MemberCell from './MemberCell';

class MemberTable extends Component {

  render() {
    return (
      <table className="member-table">
        <tbody>
          {Object.keys(this.props.summaryCounts).map((name) => (
              <MemberCell key={name}
                member={name}
                counts={this.props.summaryCounts[name]}
                reunions={this.props.reunionsForMember[name]}
                selection={this.props.selection}
                setSelection={this.props.setSelection}
              />
          ))}
        </tbody>
      </table>
    );
  }
}

MemberTable.propTypes = {
  selection: PropTypes.object,
  reunionsForMember: PropTypes.object.isRequired,
  setSelection: PropTypes.func,
  summaryCounts: PropTypes.object.isRequired
};

export default MemberTable;
