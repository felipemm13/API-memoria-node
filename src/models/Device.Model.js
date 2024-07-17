const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  deviceId: { type: String, required: true },
  custom: { type: Schema.Types.ObjectId, ref: 'Custom' }
});

module.exports = mongoose.model('Device', deviceSchema);
