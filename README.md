# Calendar
:D


# MVP Features


# API Routes
## AUTH:
POST localhost:3000/auth/login  
POST localhost:3000/auth/logout  
POST localhost:3000/auth/signup  

## CALENDAR FUNCTIONALITY:
POST localhost:3000/calendar/:userid  
{
  "eventID": ObjectId (ONLY IN GET REQUESTS)
  "userID": 123 {Number},
  "username": "johnwagner777" {String}
  "name": "lunch with bob" {String} 
  "timeStart": "2022-01-29T18:16:14.493Z" (ISO format) {String} 
  "timeEnd": "2022-01-29T18:16:14.493Z" (ISO format) {String} 
  "details": "lorem ipsum lunch preferences bob blah" {String} 
  "location": bobs house {string} 
}

GET localhost:3000/calendar/:userid  [array of event objs /\]
-> array of objects  
PATCH localhost:3000/calendar/:eventid

DELETE localhost:3000/calendar/:eventid  

# React Component Structure

App  
&ensp; Navbar  
&ensp; Calendar  

Calendar (default weekview)  
&ensp; Array[7] of Day  

Day  
&ensp; Array of Event (length depending on state)  

Event



