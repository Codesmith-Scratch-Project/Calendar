const express = require('express');
const router = express.Router();

router.post('/calender/:userid');
router.get('/calender/:userid');

module.exports = router;