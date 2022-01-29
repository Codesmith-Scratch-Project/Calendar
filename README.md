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
GET localhost:3000/calendar/:userid  
-> array of objects  
PATCH localhost:3000/calendar/:userid  
DELETE localhost:3000/calendar/:userid  

# React Component Structure

App  
&ensp; Navbar  
&ensp; Calendar  

Calendar (default weekview)  
&ensp; Array[7] of Day  

Day  
&ensp; Array of Event (length depending on state)  

Event



