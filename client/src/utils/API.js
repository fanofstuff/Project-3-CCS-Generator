import axios from "axios";

export default {
  getYourCharacters: function (pathData) {
    return axios.get("/api/users/" + pathData);
  },
  getCharacter: function (pathData) {
    return axios.get("/api/characters/" + pathData);
  },
  createCharacter: function (characterData) {
    return axios.post("/api/characters", characterData);
  },
  deleteCharacter: function (characterId) {
    return axios.delete("/api/characters/" + characterId);
  },
  assignCharacter: function (userId, characterId) {
    return axios.put("/api/users/" + userId, { value: characterId });
  },
  removeAssignedCharacter: function (userId, characterId) {
    return axios.put("/api/users/remove/" + userId, { value: characterId });
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
