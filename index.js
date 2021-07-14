const express = require('express');
const app = express();

app.get('/', (_req, res) => {
    res.send('Hello world!');
});

app.post('/', (_req, res) => {
    res.send('Got a POST request');
});

app.put('/user', (_req, res) => {
    res.send('Got a PUT request at /user');
});

app.delete('/user', (_req, res) => {
    res.send('Got a DELETE request at /user');
});

app.listen(3000, () => {
    console.log("Express is now listening on port 3000");
});