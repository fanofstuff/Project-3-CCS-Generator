import React, { Component } from "react";

class ListInput extends Component {

  handleEvent = (e) => {
    this.props.onTextChange(e.target);
  }

  render() {
    return (
      <div className={`col-md-${this.props.width}`}>
        <div className="input-group mb-3 text-box">
          <div className="input-group-prepend">
            <div className="input-group-text display-style">{this.props.label}</div>
          </div>
          <textarea
            className="form-control"
            rows="1"
            id={this.props.id}
            value={this.props.value}
            onChange={this.handleEvent}
            name={this.props.name}
            section={this.props.section}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default ListInput;
