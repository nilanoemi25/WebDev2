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
    /*const reports = await reportStore.getAllReports(); */
    const sArray = dashAnalysis.getStations(station);  
    /* const stationAndReps = await stationStore.getStationById(sArray[0]); /* not working */
    /*const minPressure = Analysis.getMinPressure(station);  */ 
    const viewData = {
      title: "WeatherTop Dashboard",
      station: station, 
      user: loggedInUser, 
    };
  
    /* 
    let rId; 
    for(let i = 0; i < sArray.length; i++){
     rId = await reportStore.getReportsByStationId(sArray[i]);
     const averagePressure = dashAnalysis.getAveragePressure(rId);  */ /* Pass in station or station ID?  */ 

   /*  } */ 
    /*console.log(sArray.length);
    console.log(rId); */ 
    
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
