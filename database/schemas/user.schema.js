const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const { Schema } = mongoose;

const userSchema = new Schema({
  id: uuid,
  name: { type: String, require: true },
  email: { type: String, require: true },
  image: String,
});

module.exports = mongoose.model("users", userSchema);
