const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/MessageRoute');
const port = 3000;

mongoose
  .connect('mongodb://127.0.0.1:27017/message_db')
  .then((result) => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(`Erro message: ${err}`);
  });

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
