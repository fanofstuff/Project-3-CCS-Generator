import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SearchCard from "../components/SearchCard";
import { Input } from "../components/Form";

class Search extends Component {
  state = {
    result: [
      {
        volumeInfo: {
          title: "",
          authors: [],
          description: "",
          imageLinks: {
            thumbnail: "",
          },
          link: "",
        },
      },
    ],
    search: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  searchBooks = (query) => {
    // basically, we make an API call on submit, then this.setState({result: res.data})
    API.search(query)
      .then((res) => this.setState({ result: res.data.items }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.searchBooks("Harry Potter");
  }

  handleSave = (event) => {
    console.log(event);
    // this.saveBook(event)
  }

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
            <div className="bg-light pt-3 pb-5 px-2">
              Book Search
              <hr />
              <div>Books</div>
              <form className="mt-2" onSubmit={this.handleFormSubmit}>
                <Input
                  onChange={this.handleInputChange}
                  name="search"
                  placeholder="Search by Title"
                />
              </form>
              <button
                className="btn btn-success float-right"
                onClick={this.handleFormSubmit}
              >
                Search
              </button>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col size="md-12">
            <div className="bg-light py-3 px-2">
              Results
              {this.state.result.map((results, index) => (
                <SearchCard
                  key={index}
                  title={results.volumeInfo.title}
                  authors={results.volumeInfo.authors}
                  description={results.volumeInfo.description}
                  image={results.volumeInfo.imageLinks.thumbnail}
                  link={results.volumeInfo.infoLink}
                  handleSave={this.handleSave}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
