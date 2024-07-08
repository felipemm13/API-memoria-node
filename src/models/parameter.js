const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DeviceId = require('./deviceId');

const parameterSchema = new Schema({
  deviceId: { type: Schema.Types.ObjectId, ref: 'DeviceId' }
});

module.exports = mongoose.model('Parameter', parameterSchema);
