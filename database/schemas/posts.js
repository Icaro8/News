const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, require: true },
  email: { type: String, require: true },
  date: { type: String },
  likes: { type: Boolean },
  desLike: { type: Boolean },
  title: { type: String, require: true },
  content: { type: String, require: true },
});

module.exports = mongoose.model("posts", userSchema);
