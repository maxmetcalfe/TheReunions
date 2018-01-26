import React, { Component } from "react";

class ReunionList extends Component {

  render() {
    return (
      <div id="reunion-list" ref="element">
        <table>
          <tbody>
            {this.props.reunions.features.reverse().map((reunion, index) => (
              <tr className={reunion.properties.category}>
                <td>{reunion.properties.location} - {reunion.properties.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ReunionList;
