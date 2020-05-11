const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // <!-- _id: ObjectId1 (auto-generated),  -->
  email: String,
  // <!-- include logic to check @something.com is present, -->
  password: String,
  // <!-- will need encryption of some kind, and probably length logic at minimum -->
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
