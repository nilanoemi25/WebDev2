import { stationStore } from "../models/station-store.js";
import {reportStore} from "../models/report-store.js"
import { Analysis} from "../utils/analysis.js";
import { userStore } from "../models/user-store.js";


export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const minPressure = Analysis.getMinPressure(station);
    const maxPressure = Analysis.getMaxPressure(station);
    const minWind = Analysis.getMinWind(station);
    const maxWind = Analysis.getMaxWind(station);
    const minTemp = Analysis.getMinTemp(station); 
    const maxTemp = Analysis.getMaxTemp(station);
    const viewData = {
      title: "Station",
      station: station,
      minPressure: minPressure,
      maxPressure: maxPressure, 
      minWind: minWind, 
      maxWind: maxWind, 
      minTemp: minTemp, 
      maxTemp: maxTemp, 
    };
    response.render("station-view", viewData);
  }, 

  async deleteReport(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Deleting Report ${reportId} from Dashboard ${stationId}`);
    await reportStore.deleteReport(request.params.reportId);
    response.redirect("/station/" + stationId);
  },
 
};