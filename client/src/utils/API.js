import axios from "axios";

export default {
  // Gets all books
  getCharacters: function() {
    return axios.get("/api/characters");
  },
  getCharacter: function(pathData) {
    return axios.get("/api/" + pathData)
  },
  createCharacter: function(characterData) {
    return axios.post("/api/characters", characterData)
  },
  saveCharacter: function(pathData, characterData) {
    return axios.put("/api" + pathData, characterData)
  }
};
