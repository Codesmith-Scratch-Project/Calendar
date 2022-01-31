const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) =>{
  //user.userID
  res.cookie('ssid', res.locals.user.userID, { httpOnly: true });
  return next();
}


module.exports = cookieController;