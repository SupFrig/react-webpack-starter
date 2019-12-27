import React, { Component } from "react";
import ReactDOM from "react-dom";

import '../scss/App.scss';
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

class App extends Component {
  render(){
  	return(
  	  <div className="Container">
  		<Header title="Webpack sample project"/>
  		<Content />
  		<Footer />
  	  </div>
  	);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));