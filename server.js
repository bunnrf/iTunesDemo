// const path = require('path');
import path from 'path';
import express from 'express';
const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);
