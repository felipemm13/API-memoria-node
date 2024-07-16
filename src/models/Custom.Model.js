const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customSchema = new Schema({}, { strict: false });

module.exports = mongoose.model('Custom', customSchema);
