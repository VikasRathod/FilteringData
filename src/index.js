import React, { Component } from "react";
import ReactDOM from "react-dom";
//import FilterData from './FilterLogic/FilterData';
import "./styles.css";
import Data from "./FilterLogic/Data";

class App extends Component {
  render() {
    return (
      <div>
        <Data />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
