import React, { Component } from "react";
import MemberIcon from './MemberIcon';
import CoinBox from './CoinBox';

class MemberCell extends Component {

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
            setSelection={this.props.setSelection}
          />
          <CoinBox name={coinBoxKey}
            member={this.props.member}
            counts={this.props.counts}
            reunions={this.props.reunions}
            selection={this.props.selection}
            setSelection={this.props.setSelection}
          />
        </td>
      </tr>
    );
  }
}

export default MemberCell;
