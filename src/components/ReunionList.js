import React, { Component } from "react";

class ReunionList extends Component {

  render() {
    console.log(this.props);
    return (
      <div id="reunion-list">
        <table>
          <tbody>
            {this.props.reunions.features.map((reunion) => (
              <tr key={reunion.properties.element_id} className={"row-" + reunion.properties.category}>
                <td>{reunion.properties.name}</td>
                <td>{reunion.properties.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ReunionList;
