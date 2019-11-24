import React, { Component } from "react";
import PropTypes from "prop-types";
import constants from "../constants";


class ReunionList extends Component {

  render() {

    if (!this.props.reunions) {
      return null;
    }

    return (
      <div id="reunion-list">
        <table>
          <tbody>
            {this.props.reunions.features.map((reunion, index) => (
              <tr className={constants.CATEGORIES[reunion.properties.category] || constants.CATEGORIES["Cat 4"]} key={index}>
                <td key={index}>{reunion.properties.location} - {reunion.properties.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ReunionList.propTypes = {
  reunions: PropTypes.object
};

export default ReunionList;
