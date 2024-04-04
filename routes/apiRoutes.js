const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/Utils');

// const readFromFile = util.promisify(fs.readFile);

router.get('/notes', (req, res) => {
    console.log('Reading file...');
    readFromFile('./db/db.json')
        .then((data) => {
            console.log('File read successfully');
            res.json(JSON.parse(data));
        })
        .catch((err) => {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
        });
});

//router.post blah blah
// look at mini project hint

router.post('/notes', (req, res) => {

     // Destructuring assignment for the items in req.body
  const { title, text} = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
     title,
     text,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'Note created successfully',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in saving note');
  }
});




module.exports = router;
