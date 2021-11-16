const router = require('express').Router();
const nmRoutes = require('./nm-routes');

router.use('/nm', nmRoutes);

module.exports = router; 