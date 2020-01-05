import React, { Component } from "react";
import PropTypes from "prop-types";
import MemberCell from './MemberCell';

export class MemberTable extends Component {

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
  summaryCounts: PropTypes.object.isRequired
};

export default MemberTable;
