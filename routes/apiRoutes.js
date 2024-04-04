const router = require('express').Router();
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

router.post('/', (req, res) => {

}) 

module.exports = router;
