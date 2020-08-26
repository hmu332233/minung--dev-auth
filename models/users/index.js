const { db, CONSTANTS } = require('./db');
const { createId } = require('./utils');

exports.CONSTANTS = CONSTANTS;
exports.db = db;

exports.find = (...params) => db.find(...params).lean().exec(); // prettier-ignore
exports.findOne = (...params) => db.findOne(...params).lean().exec(); // prettier-ignore
exports.create = (...params) => db.create(...params); // prettier-ignore

exports.createUser = async ({ email, password }) => {
  // TODO: 암호화 처리
  return db.create({ id: createId(), email, password });
};
