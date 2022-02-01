const models = require('../models/Model.js')
const CryptoJS = require("crypto-js");
const bcrypt = require('bcrypt');

const userController = {};


userController.addEvent = (req, res, next) => {
  console.log('req.body = ', req.body);
  //Store user id to req.query
  const userid = req.params.userid;
  const {username, name, start, end, details, location} = req.body;
  //Create new object w/o userid to be encrypted
  const obj = {username: username,
    name: name,
    start: start,
    end: end, 
    details: details, 
    location: location
  };
  //encrypt entire object
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(obj), 'secret key 123').toString();
  //Create event w/ with :userid property and encrypted info as value in "event" key.
  models.Encrypt.create({userID: Number(userid), event: ciphertext},
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
  models.Encrypt.find({userID: Number(urlId)})
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
  console.log(`Event to be deleted: ${req.params.eventid}`);
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
  const {username, password} = req.body
  const hashedpw = password.slice(29);
  const salt = password.slice(0, 29);
  const random = Math.floor(Math.random() * 1000);
  bcrypt.hash(hashedpw, salt)
    .then(hash =>{
      console.log(hash);
      models.User.create({userID: random, username: username, password: hash},
      (err, data) => {
        if(err){
          return next({log: 'Error in creating account'}, res.sendStatus(400));
        }
        res.locals.user = data;
        console.log(data);
        return next();
        }
      )
    })
    .catch(err => console.log(err));
}

userController.verifyUser = (req, res, next) => {
const {username, password} = req.body
const hashedpw = password.slice(29);
const salt = password.slice(0, 29);
bcrypt.hash(hashedpw, salt)
  .then(hash =>{
    // console.log(hash);
    models.User.findOne({username: username, password: hash},
    (err, data) => {
      if(err){
        res.locals.successfulLogin = false;
        return next({log: 'Error in signing into account'}, res.sendStatus(400));
      }
      res.locals.successfulLogin = true;
      res.locals.user = data
      // console.log(res.locals.successfulLogin)
      // console.log(password) 
      // console.log(data);
      return next();
      }
    )
  })
  .catch(err => console.log(err));
}

userController.logOut = (req, res, next) => {
 const { username } = req.query; 
  models.User.findOne({username: username},
    (err, data) => {
      if(err){
        return next({log: 'Error in logging out'}, res.sendStatus(400));
      }
      console.log(data)
      res.locals.id = data.userID;
      return next();
      }
    )
}

//Testing bcryptcompare, keeps failing.
// userController.verifyUser = (req, res, next) => {
//   const {username, password} = req.body;
//   models.User.findOne({username: username}, (err, user) =>{
//     if(err) {
//       return next('Error in verifying users');
//     }
//     bcrypt.compare(password, user.password)
//       .then(result => {
//         if(!result) {
//           console.log('passwords did not match', password, user.password)
//           return next();
//         } else{
//           console.log('passwords matched', password, user.password);
//           return next();
//         }
//       })
//   })
// }


module.exports = userController;