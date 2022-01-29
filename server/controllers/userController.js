const userController = {};
const models = require('../models/model')

userController.addEvent = (req, res, next) => {
  //need to read request body and create on mongodb.
  //encrypt event data
  //
}

userController.getEvents = (req, res, next) => {
    // write code here
    //     const speciesID = req.query.id;
    //    console.log(req.query.id);
    //    models.Species.find({_id: speciesID})
  
  //grab data from mongo db
  // console.log('req query', req.query)
  //http://localhost:3000/api/calendar/userid?userid=123
  //http://localhost:3000/api/calendar/123
  console.log('req params', req.params)
  const urlId = req.params.userid;
  //find({userID: '456'})
  models.Calendar.find({userID: urlId})
  .then(data => {
    res.locals.return = data
    return next();
  })
}

module.exports = userController;