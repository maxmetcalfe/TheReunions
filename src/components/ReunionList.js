import React, { Component } from "react";

class ReunionList extends Component {

  createStyle(index) {
    return {
      fontSize: 50 - index
    };
  }

  render() {
    return (
      <div id="reunion-list">
        <table>
          <tbody>
            {this.props.reunions.features.reverse().map((reunion, index) => (

              <tr className={reunion.properties.category} style={this.createStyle(index)}key={reunion.properties.element_id}>
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
