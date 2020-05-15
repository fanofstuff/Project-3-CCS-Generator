import axios from "axios";

export default {
  // Gets all books
  getYourCharacters: function (pathData) {
    return axios.get("/api/characters/" + pathData);
  },
  getCharacter: function (pathData) {
    return axios.get("/api/characters/data/" + pathData);
  },
  createCharacter: function (characterData) {
    return axios.post("/api/characters", characterData);
  },
  assignCharacter: function(userId, characterId) {
    return axios.put("/api/users/" + userId, {value: characterId})
  },
  saveCharacter: function (pathData, characterData) {
    return axios.put("/api" + pathData, characterData);
  },
  signUp: function (userData) {
    return axios.post("/api/users", userData);
  },
  login: function (userData) {
    return axios.post("/api/auth", userData);
  },
};
