const router = require('express').Router();

const { 
    sendMail
} = require('../../controller/nm-controller');

router.route('/').post(sendMail);

module.exports = router; 