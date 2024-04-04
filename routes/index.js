const router = require('express').Router();

// Import our files containing our routes
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

router.use('/notes', htmlRoutes);
router.use('/api/notes', apiRoutes);


module.exports = router;
