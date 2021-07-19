const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('My first AWS DevOps tutorials!.' +
    'I have been able to create a pipe from source to build, review and deploy'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
