const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
  _id:Number,
  name:String,
  amount:Number
})
const Group = mongoose.model('groups', groupSchema);
module.exports = Group;