const express = require('express');
const fs = require ('fs');
// const routes = require('./routes');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

// const path = require('path');

const PORT = process.env.PORT || 3001; // Default to port 3001 if PORT environment variable is not set
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

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// app.use(routes);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
