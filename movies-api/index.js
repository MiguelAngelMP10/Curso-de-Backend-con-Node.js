const express = require('express');
const app =  express();

const {config} =  require('./config/index');



app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.get('/json', (req, res) => {
    res.json({mensaje:'Hola mundo'})
});


app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}! `);
});