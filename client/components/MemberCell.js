import React, { Component } from "react";
import PropTypes from "prop-types";
import MemberIcon from './MemberIcon';
import CoinBox from './CoinBox';

export class MemberCell extends Component {

  render() {
    let memberIconKey = this.props.member + "-member-icon";
    let coinBoxKey = this.props.member + "-coin-box";
    return (
      <tr key={this.props.member + "T"}>
        <td key={this.props.member}>
          <MemberIcon key={memberIconKey}
            id={memberIconKey}
            text={this.props.member}
            reunions={this.props.reunions}
            selection={this.props.selection}
          />
          <CoinBox name={coinBoxKey}
            member={this.props.member}
            counts={this.props.counts}
            reunions={this.props.reunions}
            selection={this.props.selection}
          />
        </td>
      </tr>
    );
  }
}

MemberCell.propTypes = {
  reunions: PropTypes.array.isRequired,
  selection: PropTypes.object,
  counts: PropTypes.object.isRequired,
  member: PropTypes.string.isRequired
};

export default MemberCell;
