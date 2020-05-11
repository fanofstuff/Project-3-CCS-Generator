import axios from "axios";

export default {
  // Gets all books
  getCharacters: function() {
    return axios.get("/api/characters");
  },
  createCharacter: function(characterData) {
    return axios.post("/api/characters", characterData)
  }
};
