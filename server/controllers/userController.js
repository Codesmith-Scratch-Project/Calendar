const models = require('../models/Model.js')
const CryptoJS = require("crypto-js");
// const bcrypt = require('bcrypt');

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
  //encrypt entire object
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(obj), 'secret key 123').toString();
  //Create event w/ with :userid property and encrypted info as value in "event" key.
  models.Encrypt.create({userID: userid, event: ciphertext},
    (err, data) => {
      if(err){
        return next({log: 'Error in creating events'}, res.sendStatus(400));
      }
      res.locals.newevent = obj;
      return next();
    });
  }

userController.getEvents = (req, res, next) => {
  //Grabs all events from collection related to userID
  //save user id in variable
  const urlId = req.params.userid;
  //find all events regarding user id
  models.Encrypt.find({userID: urlId})
  .then(data => {
    //Empty array to hold each event as an object
    const output = [];
    //Iterate thru each encrypted file. Decrypt and attach unique event id .
    //Send to client an array of events related to user.
    data.forEach((ele) => {
      const bytes = CryptoJS.AES.decrypt(ele.event, 'secret key 123');
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      const obj = {
        eventid : ele._id,
        ...decryptedData
      }
      output.push(obj);
    })
    res.locals.return = output;
    return next();
  })
  .catch(err => {
    if(err){
      return next({log: 'Error in grabbing user events'}, res.sendStatus(400))
    };
  });
}

userController.updateEvent = (req, res, next) => {
  //req.query contains all of the updated information
  const eventid = req.params.eventid
  //Finds unique eventid
  models.Encrypt.findOne({eventid: eventid})
  .then(data => {
     //Decrypt the related event and parses the data for modification
     const bytes = CryptoJS.AES.decrypt(data.event, 'secret key 123');
     const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
     //Create object storing the updated information.
     const obj = {
       ...decryptedData,
       ...req.query
     };
     //Encrypt the updated information and updates the mongo collection w/ the new encryption
     const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(obj), 'secret key 123').toString();
     models.Encrypt.updateOne({eventid: eventid},
      {event: ciphertext}, 
      (err, data) => {
        if(err){
          return next({log: 'Error in updating event'}, res.sendStatus(400));
        };
        //Save the updated properties onto res.locals.updated info to send back to client
        res.locals.updatedinfo = {...req.query}
        return next();
      }
      );
   })
   .catch(err => {
    if(err){
      return next({log: 'Error in updating'}, res.sendStatus(400));
    };
  });
}

//Locates eventid in mongoose and deletes the entire event
userController.deleteEvent = (req, res, next) => {
  const eventid = req.params.eventid
  models.Encrypt.findOneAndDelete({eventid: eventid},
    (err, data) =>{
      if(err){
        return next({log: 'Error in deleting event'}, res.sendStatus(400));
      }
      return next();
    })
}

userController.createUser = (req, res, next) => {
  //bcrypt password and create user
  const saltRounds = 10;
  const {username, password} = req.body
  bcrypt.hash(password, saltRounds)
    .then(hash =>{
      models.User.create({username: username, password: hash},
      (err, data) => {
        if(err){
          return next({log: 'Error in creating account'}, res.sendStatus(400));
        }
        return next();
        }
      )
    })
    .catch(err => console.log(err));
}

userController.verifyUser = (req, res, next) => {
  const {username, password} = req.body
  models.User.findOne({username: req.body.username, password: req.body.password}, 
    (err, user) => {
    if (err) {
      next({err: 'Error in verifying user'});
    }
      return next();
    }
  )
};

module.exports = userController;