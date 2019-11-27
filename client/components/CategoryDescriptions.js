import React, { Component } from "react";

class CategoryDescriptions extends Component {

  constructor() {
    super();
    this.baseClass = "coin";
    this.descriptions = {
      five: {
        value: 5,
        text: "All four members present + special occasion"
      },
      four: {
        value: 4,
        text: "All four members present"
      },
      three: {
        value: 3,
        text: "Three members present"
      }, 
      two: {
        value: 2,
        text: "Two members present"
      }
    };
  }

  render() {
    return (
      <table className="category-descriptions">
        <tbody>
          {Object.keys(this.descriptions).map((category) => (
            <tr key={category}>
              <td><div className={this.baseClass + " " + category}>{this.descriptions[category].value}</div></td>
              <td><h3 className={category}>{this.descriptions[category].text}</h3></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default CategoryDescriptions;
