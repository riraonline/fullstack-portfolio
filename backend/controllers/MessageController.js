const Message = require('../models/MessageModel');

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMessageById = async (req, res) => {
  try {
    const messages = await Message.findById(req.params.id);
    res.json(messages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const saveMessage = async (req, res) => {
  const message = new Message(req.body);
  try {
    const insertData = await message.save();
    res.status(201).json(insertData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateMessage = async (req, res) => {
  try {
    const updateData = await Message.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updateData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const deleteData = await Message.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = [getMessages, getMessageById, saveMessage, updateMessage, deleteMessage];
