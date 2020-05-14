import React from "react";
import { Link } from "react-router-dom";
import "./CharacterCard.css";

const CharacterCard = (props) => {
  return (
    <div className="col-md-4 card-styling">
      <Link to={{pathname: `/characters/${props.id}`}}>
        <h3 className="text-styling">{props.character_name}</h3>
      </Link>
    </div>
  );
};

export default CharacterCard;
