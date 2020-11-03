const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name:String,
  description:String,
  img:String,
  date:String,
  time:String
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);




module.exports = Event;