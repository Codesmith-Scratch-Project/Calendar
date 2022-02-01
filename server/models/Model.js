const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://user:codesmith@cluster0.nzzjk.mongodb.net/calendar?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'calendar'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;


const calendarSchema = new Schema({
  _eventID: String,
  userID: Number,
  username: String,
  name: String,
  timeStart: String,
  timeEnd: String,
  details: String,
  location: String
});

const Calendar = mongoose.model('main', calendarSchema);


const encryptSchema = new Schema({
  userID: Number,
  event: String
});

const Encrypt = mongoose.model('encrypt', encryptSchema);

const userSchema = new Schema({
  userID: Number,
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})

const User = mongoose.model('user', userSchema);

const sessionSchema = new Schema({
  cookieID: {type: String, required: true, unique: true},
  createdAt: {type: Date, expires: 600, default: Date.now }
})

const Session = mongoose.model('session', sessionSchema);

module.exports = {
  Calendar,
  Encrypt,
  User,
  Session
};