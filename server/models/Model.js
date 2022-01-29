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

// sets a schema for the 'species' collection
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

module.exports = {
  Calendar
};
