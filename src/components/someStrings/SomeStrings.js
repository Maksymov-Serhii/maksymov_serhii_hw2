import React from "react";
import './SomeStrings.css';

class SomeStrings extends React.Component {
  render() {
    return (
      <div className="Some-string-component">
        <h1>{this.props.itSchool}</h1>
        <h2>Welcome</h2>
        <table className="Some-table">
          <thead>
            <tr className="Some-table-header">
              <th className="Some-table-cell">Student</th>
              <th className="Some-table-cell">Chosen course</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="Some-table-cell">{this.props.studentLastName} {this.props.studentFirstName}</td>
              <td className="Some-table-cell">{
                this.props.isChosenReact ? this.props.course1 : this.props.course2
              }</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default SomeStrings;