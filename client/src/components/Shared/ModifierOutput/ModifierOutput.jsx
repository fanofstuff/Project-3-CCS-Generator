import React from "react";

const ModifierOutput = (props) => {
  
  return (
    <div className={`col-md-${props.width}`}>
    <div className="input-group mb-3 text-box">
      <div className="input-group-prepend">
        <div className="input-group-text">{props.label}: </div>
      </div>
      <textarea
        className="form-control"
        id="text-area"
        rows="1"
        value={props.value}
        name={props.name}
        disabled={true}
      ></textarea>
    </div>
  </div>
);

};

export default ModifierOutput;
