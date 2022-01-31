const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//require routers
const eventRouter = require(path.resolve(__dirname, './routes/events'));
const accountRouter = require(path.resolve(__dirname, './routes/account'));

//Handles parsing request body
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// statically serve everything in the build folder on the route '/build'
app.use(express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
});

//route handlers
app.use('/', eventRouter);
app.use('/', accountRouter);

//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }, 
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {console.log(`Server is running on port: ${PORT}...`); });

