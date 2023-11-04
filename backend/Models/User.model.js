const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  city: {
    type: String,
    default: "Delhi"
  }
});

const userModel = mongoose.model("user", Schema);

module.exports = { userModel };
