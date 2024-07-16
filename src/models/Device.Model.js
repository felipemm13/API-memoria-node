const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceIdSchema = new Schema({
  deviceId: { type: String, required: true },
  custom: { type: Schema.Types.ObjectId, ref: 'Custom' }
});

module.exports = mongoose.model('DeviceId', deviceIdSchema);
