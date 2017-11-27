import React, { Component } from "react";
import MemberCell from './MemberCell';

class MemberTable extends Component {

  render() {
    return (
      <table className="member-table">
        <tbody>
          {Object.keys(this.props.summaryCounts).map((name) => (
              <MemberCell key={name} member={name} counts={this.props.summaryCounts[name]} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default MemberTable;
