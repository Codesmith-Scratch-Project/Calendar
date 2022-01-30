const models = require('../models/Model.js')
const CryptoJS = require("crypto-js");

const userController = {};

userController.addEvent = (req, res, next) => {
  //Store user id to req.query
  const userid = req.query.userid;
  const {username, name, timestart, timeend, details, location} = req.query
  //Create new object w/o userid to be encrypted
  const obj = {username: username,
    name: name,
    timestart: timestart,
    timeend: timeend, 
    details: details, 
    location: location
  };

  //encrypt the events and store onto mongodb
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(obj), 'secret key 123').toString();

  models.Encrypt.create({userID: userid, event: ciphertext},
    (err, data) => {
      if(err){
        return next({log: 'Error in creating events'}, res.sendStatus(400))
      }
      return next();
    });
  }

userController.getEvents = (req, res, next) => {
  //grab data from mongo db
  // console.log('req query', req.query)


  const urlId = req.params.userid;

  //find all events regarding user id
  models.Encrypt.find({userID: urlId})
  .then(data => {
    const output = [];
    data.forEach((ele) => {
      const bytes = CryptoJS.AES.decrypt(ele.event, 'secret key 123');
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      output.push(originalText);
    })
    res.locals.return = output;
    return next();
  })
}

module.exports = userController;