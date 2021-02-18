const express = require('express');
const app = express();
const route = require('./route.js');



app.use('/api', route);

app.use((req, res) => {
    res.json({
        msg: 'API not found.'
    })
});


app.listen(3000);