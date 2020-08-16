const mongoose = require('mongoose');
const { createId } = require('./utils');

const CONSTANTS = {};

const schema = new mongoose.Schema(
  {
    id: { type: String, unique: true, default: createId() },
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
