import React, { Component } from "react";
import ReactDOM from "react-dom";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      copyright: ""
    };
  }

  componentWillMount(){
    var year = new Date().getFullYear()
    this.state.copyright = "© Thomas Montet " + year
  }

  render() {
    return (
      <footer>
        {this.state.copyright}
      </footer>
    );
  }
}

export default Footer;