import React, { Component } from "react";

class CharacterInput extends Component {

  handleEvent = (e) => {
    this.props.onTextChange(e.target);
  }


  render() {
    return (
      <div className={`col-md-${this.props.width}`}>
        <div className="input-group mb-3 text-box">
          <div className="input-group-prepend">
            <div className="input-group-text">{this.props.label}</div>
          </div>
          <textarea
            className="form-control"
            rows="1"
            value={this.props.value}
            onChange={this.handleEvent}
            name={this.props.name}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default CharacterInput;
