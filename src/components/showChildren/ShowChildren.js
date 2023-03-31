import React from "react";

class ShowChildren extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default ShowChildren;