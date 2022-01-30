const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/calendar/:userid',
userController.addEvent,
(req, res) => {
  return res.status(200);
}
);

router.get('/calendar/:userid',
userController.getEvents,
(req, res) => {
  console.log(res.locals.return);
  return res.status(200).json(res.locals.return)
}
);

//Functioning Get Request => http://localhost:3000/api/calendar/123
//Functioning Post Request => http://localhost:3000/api/calendar/123?username=john&name=dinner with bob&timeStart=2022-01-29T18:16:14.493Z&timeEnd=2022-01-29T18:16:14.493Z&details=lorem ipsum lunch preferences bob blah&location=bob's house&userid=123

module.exports = router;