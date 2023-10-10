const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name must be written!'],
  },
  email: {
    type: String,
    required: [true, 'Email must be written!'],
  },
  message: {
    type: String,
    required: [true, 'Message cannot be empty'],
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
