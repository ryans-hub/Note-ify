const express = require('express');
const fs = require ('fs');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

const path = require('path');

const PORT = 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// app.get('/notes', (req, res) => 
//     res.sendFile(path.join(__dirname, '/public/notes.html'))

// );

// app.get('*', (req, res) =>
//     res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// app.get('/api/notes', (req, res) =>

// );

// app.use('/', htmlRoutes);
// app.use('/api', apiRoutes);

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
