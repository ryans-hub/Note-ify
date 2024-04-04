const router = require('express').Router();

// Import our files containing our routes
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

router.use('/html', htmlRoutes);
router.use('/api', apiRoutes);


module.exports = router;
