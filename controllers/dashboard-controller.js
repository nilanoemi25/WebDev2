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
    let reportsArray; 
    for(let i = 0; i< sArray.length; i++){
     reportsArray = await reportStore.getReportsByStationId(sArray[i]);

    } 
    /*Gets current time for the reports */
    let currentTime = dashAnalysis.getCurrentTime(reportsArray); 
    const currentReport = await reportStore.getReportByCurrentTime(currentTime); 
    const cReportActual = currentReport[0]; 
    const currentPressure = currentReport[0]["pressure"]; /*
    const currentTemp = currentReport[0]["temperature"];
    const currentWind = currentReport[0]["windspeed"]; 
    const code = currentReport[0]["code"]; */ 

    const viewData = {
      title: "WeatherTop Dashboard",
      station: station, 
      user: loggedInUser, 
      report: cReportActual, 
      pressure: currentPressure,  
    }; 
    
    console.log(cReportActual); 
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
