const models = require('../models/Model.js');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');

const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) =>{
    // console.log('cookieconsole'. req.cookies)
    res.cookie(res.locals.user.userID, uuidv4(), { httpOnly: true });
    // console.log('req cookies', req.cookies);
    return next();
}

cookieController.clearCookie = (req, res, next) => {
  // console.log('this is in cookeController now', res.locals.id)
    res.clearCookie(res.locals.id);
    return next();
}


module.exports = cookieController;