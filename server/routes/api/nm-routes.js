const router = require('express').Router();

const { 
    sendMail
} = require('../../controller/nm-controller');

router.route('/nm').post(sendMail);

module.exports = router; 