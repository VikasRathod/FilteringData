import React, { Component } from "react";
//import Employee from "../JsonFiles/Employee.json";
import EmployeeList from "../FilterLogic/EmployeeList";
class FilterData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newValue: "",
      data: []
    };
  }

  componentDidMount() {
    this.FetchData();
  }

  FetchData() {
    console.log("req list product");
    fetch("/Employee.json")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          data: responseJson.Employees
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  static getDerivedStateFromProps(props, state) {
    return {
      newValue: props.updateValue
    };
  }

  render() {
    console.log(this.state.newValue);

    let FilteredEmployee = this.state.data.filter(data => {
      return data.tech
        .toLowerCase()
        .includes(this.state.newValue.toLowerCase());
    });

    return (
      <div>
        <EmployeeList FilteredEmployee={FilteredEmployee} />
      </div>
    );
  }
}

export default FilterData;
