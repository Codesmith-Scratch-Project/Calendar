const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');


// POST localhost:3000/auth/login  
// POST localhost:3000/auth/logout  
// POST localhost:3000/auth/signup  

router.post('/auth/signup',
userController.createUser,
(req, res) => {
  return res.status(200)
  }
);

router.post('/auth/login')

module.exports = router;