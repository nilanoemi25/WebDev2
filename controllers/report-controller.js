import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";

export const ReportController = {
async addReport(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const newReport = {
      title: request.body.title,
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windspeed: Number(request.body.windspeed),
      winddirection: Number(request.body.winddirection),
      pressure: Number(request.body.pressure),   
    };
    console.log(`adding report ${newReport.code}`);
    await reportStore.addReport(station._id, newReport);
    response.redirect("/station/" + station._id);
  },
}