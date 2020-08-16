const mongoose = require('mongoose');

const CONSTANTS = {};

const schema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    email: { type: String },
    password: { type: String, select: false },
  },
  {
    timestamps: true,
  }
);

module.exports = {
  CONSTANTS,
  db: mongoose.model('user', schema),
};
