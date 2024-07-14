const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  last_name: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  expenses: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  observations: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("users", usersSchema);

module.exports = UserModel;
