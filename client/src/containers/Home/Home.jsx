import React, { Component } from "react";
import "./Home.css";
import API from "../../utils/API";
import CharacterCard from "../../components/Shared/CharacterCard/CharacterCard";

/*
Right, so this page should have two main components to it: 
1. First, the Character display section should have links to previously created character sheets. 
Ideally, these should be formatted into rows and columns that can stack nicely in mobile view. 
Clicking on a button here should direct you to the /character/:id page associated with that character. 
There should also be a delete button for each character, and, ideally, a "read-only" button; 
this should display the same character sheet, but without text-areas, I guess. 
*This is a stretch goal*. 
2. Second, the Create a Character button should (we'll hammer out the details later),
    A. Make an axios call to the backend to generate a new, blank character. 
    B. Redirect the user to the /character/:id page associated with that character.
*/

class Home extends Component {
  state = {
    characters: [],
  };

  createNewCharacter = () => {
    API.createCharacter({})
      .then((response) => {
        console.log(response);
        window.location.href = `/characters/${response.data._id}`;
      })
      .catch((err) => console.log(err));
  };

  getAllCharacters = () => {
    API.getCharacters().then((response) => {
      console.log(response);
      response.data.forEach((element) => {
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
