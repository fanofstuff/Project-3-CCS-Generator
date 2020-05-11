import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SavedCard from "../components/SavedCard";

class Saved extends Component {
  state = {
    result: [
      {
        id: "",
        title: "",
        authors: [],
        description: "",
        image: "",
        link: "",
      },
    ],
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = (event) => {
    API.getAllBooks()
      .then((res) =>
        res.forEach((element) => {
          this.setState((prevState) => ({
            result: [...prevState, element],
          }));
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <br />
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <h3>Search for and Save Books of Interest</h3>
            </Jumbotron>
            <br />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div className="bg-light py-3 px-2">
              Saved Books
              {this.state.result.map((results, index) => (
                <SavedCard
                  key={results.id}
                  id={results.id}
                  title={results.title}
                  authors={results.authors}
                  description={results.description}
                  image={results.image}
                  link={results.link}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
