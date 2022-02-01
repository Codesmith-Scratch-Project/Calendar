const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/cookieController.js')

// POST localhost:3000/auth/login  
// POST localhost:3000/auth/logout  
// POST localhost:3000/auth/signup  

router.post('/auth/signup',
userController.createUser,
// cookieController.setSSIDCookie,
(req, res) => {
  return res.status(200)
  }
);

router.post('/auth/login',
userController.verifyUser,
cookieController.setSSIDCookie,
(req, res) => {
  if (res.locals.successfulLogin === true) {
    return res.send('Login was successful!')
  }
})

router.post('/auth/logOut',
userController.logOut,
cookieController.clearCookie,
(req, res) => {
  return res.status(200).redirect('http://localhost:3000/auth/login');
})

module.exports = router;