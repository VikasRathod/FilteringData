import React from "react";
import Employee from "../FilterLogic/Employee";

function EmployeeList(props) {
  let employees = props.FilteredEmployee.map((employee, i) => {
    return <Employee key={i} name={employee.name} tech={employee.tech} />;
  });

  return <div>{employees}</div>;
}

export default EmployeeList;
