const express = require('express');
const app = express();

app.get('/', (req, res) => { //router handler
    res.send('Hello world, this is the root router');

});


app.get('/uno', (req, res) => { // router handler
    res.send('Hello world, from router One');

});

app.get('/prueba', (req, res) => { //router handler
    //res.send('Hello world, frome route prueba');

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello world , from router prueba</h1>
    </body>
    </html>`);
});
app.listen(3000);