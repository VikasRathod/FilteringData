import React from "react";

function Employee(props) {
  return (
    <div>
      <fieldset>
        <p> Name : {props.name}</p>
        <p> Technology : {props.tech}</p>
      </fieldset>
    </div>
  );
}

export default Employee;
