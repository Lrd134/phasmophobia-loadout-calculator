const express = require('express');
const app = express();
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
const port = 3001;
const items = require('./items');
app.get('/items', (req, res) => {
  res.send(JSON.stringify(items));
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})