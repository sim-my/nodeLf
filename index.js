const express = require('express');
const app = express();
const route = require('./route.js');

app.use('/api', route);


app.listen(3000);