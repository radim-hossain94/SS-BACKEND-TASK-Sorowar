const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    min: 4,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  role: {
    type: Boolean,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
