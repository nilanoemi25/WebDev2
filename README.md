HDip 1st year, Web Development 2, Assignment Project
--- 

##Weather App
--- 

###Project Description

This project is part of continuous assessment for WD2 and is based on server side scripting. It is built with Node and Express and is the first time I have used these technologies. Aiming for high 2.1 or 1.

###Usage

-Users can create their own accounts, based on session cookies and can login or out. 
-Stations and reports belonging to that user will show. 
-Notice the min/max of temp wind and pressure appearing on reports view. Different icons will appear based on weather code. 
-Reports can be manually added (Release 1 criteria) or reports can be generated from API (Release 4 criteria)
-Stations can be manually added. 
-All stations are alphabetically listed. 
-Stations and reports can be deleted. Deleting does **not** autocascade. 

-API generated graph or API generated data both work, **but separately.** 
**Change route to post to call the relevant part of the controller.** 

###Configuration

`npm install express`
`npm start`

###Examples

Use Latitude: 52.160858 and Longitude -7.152420 to generate code from API.

###Documentation

N/A

###License

Free License for projecy
Restricted license for Map: 
http://www.openstreetmap.org/copyright

###Contact Info
Noemi - gopika.noemi@gmail.com