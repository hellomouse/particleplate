const express = require('express');
const app = express();

const path = require('path');

app.get('/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/bundle.js'));
});

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on :' + port);
});
