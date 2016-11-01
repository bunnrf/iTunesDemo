const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('./'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);
