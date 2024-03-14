const express = require('express');

const app = express();

const path = require('path');

const PORT = 3001;

app.use(express.static('public'));

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))

);


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
