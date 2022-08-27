const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World, from express');

    console.log(req)
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));