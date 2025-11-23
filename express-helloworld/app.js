const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!\n'));
app.get('/mars', (req, res) => res.send('Hello Mars!\n'));

const port = 8080;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;