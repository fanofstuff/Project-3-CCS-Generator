import React, { Component } from "react";
import "./Home.css";
import API from "../../utils/API";
import CharacterCard from "../../components/Shared/CharacterCard/CharacterCard";

class Home extends Component {
  state = {
    characters: [],
  };

  createNewCharacter = () => {
    API.createCharacter({})
      .then((response) => {
        console.log(response.data._id);
        var charId = response.data._id;
        this.assignCharacter(charId);
      })
      .catch((err) => console.log(err));
  };

  assignCharacter = (charId) => {
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf("/") + 1);
    API.assignCharacter(id, charId)
      .then((response) => {
        console.log(response);
        window.location.href = `/characters/${charId}`;
      })
      .catch((err) => console.log(err));
  };

  getAllCharacters = () => {
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf("/") + 1);
    API.getYourCharacters(id).then((response) => {
      console.log(response);
      response.data.characters.forEach((element) => {
        this.setState({
          characters: [...this.state.characters, element],
        });
      });
    });
  };

  componentDidMount() {
    this.getAllCharacters();
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col homepage-cover">
              <h1 className="text-style">Characters</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.characters.map((character) => (
              <CharacterCard
                key={character._id}
                id={character._id}
                character_name={character.character_name}
                getAllCharacters={this.getAllCharacters}
              />
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col homepage-cover">
              <button
                className="btn text-style"
                type="submit"
                name="action"
                onClick={this.createNewCharacter}
              >
                Create New Character
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
