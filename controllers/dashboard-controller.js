import { stationStore } from "../models/station-store.js";
import { accountsController } from "./accounts-controller.js"; 
import { reportStore } from "../models/report-store.js";
import { Alphabetical } from "../utils/alphabetical.js";
import { dashAnalysis } from "../utils/dashAnalysis.js";
import { Analysis } from "../utils/analysis.js";


export const dashboardController = {
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request); 
    const station = await stationStore.getStationsByUserId(loggedInUser._id);
    const alphabetical = Alphabetical.sortStation(station); 
    const sArray = dashAnalysis.getStations(station);  /*Gets all station Ids */
    /*Gets all report Ids ISSUE - only iterates one station for some reason*/ 
   /* let reportsArray = []; 
    for(let i = 0; i< sArray.length; i++){
     let reports = await reportStore.getReportsByStationId(sArray[i]);
     reportsArray.push(reports);
    } */ 


    /*Gets current time for the reports */
  /*  let currentTime = dashAnalysis.getCurrentTime(reportsArray); 
    const currentReport = await reportStore.getReportByCurrentTime(currentTime); */
  /*  const cReportActual = currentReport[0]; RELEASE 3 not working 
    const currentPressure = currentReport[0]["pressure"]; /*
    const currentTemp = currentReport[0]["temperature"];
    const currentWind = currentReport[0]["windspeed"]; 
    const code = currentReport[0]["code"]; */ 


    let reportsArrayForMap = [];  
    for(let i =0; i<station.length; i++){
    let obj = {};
    obj.name = station[i].title; 
    obj.latitude = station[i].latitude; 
    obj.longitude = station[i].longitude; 
    reportsArrayForMap.push(obj); 
    } 

    const viewData = {
      title: "WeatherTop Dashboard",
      station: station, 
      user: loggedInUser, 
      reportsArrayForMap: reportsArrayForMap, 
  
    }; 
    
   console.log(test);
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
    
  },
  
  async addStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const newStation = {
      title: request.body.title,
      latitude: Number(request.body.latitude),
      longitude: Number(request.body.longitude),
      userid: loggedInUser._id,
    };
    console.log(`adding station ${newStation.title}`);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  },

  async deleteStation(request, response) {
    const stationId = request.params.id;
    console.log(`Deleting Station ${stationId}`);
    await stationStore.deleteStationById(stationId);
    response.redirect("/dashboard");
  },
  
};
