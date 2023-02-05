import items from './items.js'
const express = require('express');
const app = express();
app.use('/static', express.static(path.join(__dirname, 'public')))
const port = 3000;
app.get('/items', (req, res) => {
  res.send(items);
})