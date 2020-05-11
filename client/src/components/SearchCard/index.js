import React from "react";
import { Col, Row } from "../Grid";

const SearchCard = ({ title, authors, description, image, link, handleSave }) => {
  const displayStyle = {
    display: "inline",
  };


  function handleSaveButton() {
    var bookData = {
        title: {title}, 
        authors: [{authors}],
        description: {description},
        image: {image},
        link: {link}
    }
    handleSave(bookData);
  }

  return (
    <div className="bg-light p-2 m-3">
      <Row>
        <Col size="md-6">
          <h1>{title}</h1>
          <h2>Written By: {authors && authors.join(", ")}</h2>
        </Col>
        <Col size="md-6">
          <button className="btn btn-primary float-right" onClick={handleSaveButton}>Save</button>
          <a href={link} className="btn btn-dark float-right">
            View
          </a>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <img
            src={image}
            alt={title}
            height="200"
            width="200"
            className="float-left mr-3 mb-3"
          />
          <p style={displayStyle}>Description: {description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default SearchCard;
