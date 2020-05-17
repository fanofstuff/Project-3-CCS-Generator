import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CharacterCard.css";
import API from "../../../utils/API";

class CharacterCard extends Component {
  deleteCharacter = (event) => {
    event.preventDefault();
    console.log("this is a test. ID: " + event.target.id);
    API.deleteCharacter(event.target.id)
      .then((response) => {
        console.log(response.data._id);
        var charId = response.data._id;
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf("/") + 1);
        API.removeAssignedCharacter(id, charId)
          .then((response) => {
            console.log(response);
            window.location.reload();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="col-lg-4 card-styling">
        <Link to={{ pathname: `/characters/${this.props.id}` }}>
          <h3 className="text-styling">{this.props.character_name}</h3>
        </Link>

        <button
          className="btn btn-danger delete-button"
          id={this.props.id}
          onClick={this.deleteCharacter}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default CharacterCard;
