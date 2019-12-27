import React, { Component } from "react";
import ReactDOM from "react-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
  }

  render() {
    return (
      <header>
        <h1>{this.state.title}</h1>
      </header>
    );
  }
}

export default Header;