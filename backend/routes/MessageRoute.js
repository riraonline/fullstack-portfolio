const express = require('express');
const router = express.Router();

const [getMessages, getMessageById, saveMessage, updateMessage, deleteMessage] = require('../controllers/MessageController');

router.get('/messages', getMessages);
router.get('/messages/:id', getMessageById);
router.post('/messages', saveMessage);
router.patch('/messages/:id', updateMessage);
router.delete('/messages/:id', deleteMessage);

module.exports = router;
