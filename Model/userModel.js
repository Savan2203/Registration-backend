const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String },
});

module.exports = mongoose.model("users", user);
