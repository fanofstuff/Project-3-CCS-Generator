// import logo from "./logo.svg";
// import "./App.css";
import axios from "axios";
import API from "./utils/API";

import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleButton = (query) => {
    API.getCharacters()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  characterCreate = (query) => {
    API.createCharacter({"character_description.character_name":"Waldo of Wallaby"})
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  render() {
    return (
    <div>
      Hello World
      <button onClick={this.handleButton}>Click to Console Log All Characters</button>
      <button onClick={this.characterCreate}>Click to Create a Character</button>
    </div>
    );
  }
}

export default App;
