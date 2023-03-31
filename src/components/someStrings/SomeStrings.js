import React from "react";

class SomeStrings extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.itSchool}</h1>
        <h2>Welcome</h2>
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Chosen course</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.studentLastName} {this.props.studentFirstName}</td>
              <td>{
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