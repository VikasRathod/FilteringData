import React, { Component } from "react";
import FilterData from "../FilterLogic/FilterData";
class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayVal: ""
    };
  }

  displayText = e => {
    e.preventDefault();
    this.setState({
      displayVal: e.target.innerHTML
    });
  };

  render() {
    let newState = this.state.displayVal;
    return (
      <div>
        <h2 onClick={this.displayText}>React</h2>
        <h2 onClick={this.displayText}>Angular</h2>
        <h2 onClick={this.displayText}>Android</h2>
        <h2 onClick={this.displayText}>Ios</h2>
        <FilterData updateValue={newState} />
      </div>
    );
  }
}
export default Data;
