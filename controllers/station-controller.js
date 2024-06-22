import { stationStore } from "../models/station-store.js";
import {reportStore} from "../models/report-store.js"

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const viewData = {
      title: "Station ",
      station: station,
    };
    console.log("reached index");
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