const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! v2\n');
});

app.get('/mars', (req, res) => {
  res.send('Hello Mars! v2\n');
});

const port = 8080;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;// trigger build
