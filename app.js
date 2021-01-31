const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World. updated msg. github linked.');
});

module.exports = app;