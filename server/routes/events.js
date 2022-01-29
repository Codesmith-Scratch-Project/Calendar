const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/calendar/:userid');
router.get('/calendar/:userid',
userController.getEvents,
(req, res) => {
  console.log(res.locals.return);
  return res.status(200).json(res.locals.return)
}
);

module.exports = router;