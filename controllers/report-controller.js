import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import axios from "axios";
const weatherRequestUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tramore,Ireland&units=metric&appid=4111bc62708478a8a0233bf6fe177a24`; 


export const ReportController = {
async addReport(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const date = new Date().toISOString();
    const newReport = {
      title: request.body.title,
      date: date, 
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windspeed: Number(request.body.windspeed),
      winddirection: request.body.winddirection, 
      pressure: Number(request.body.pressure),   
    };
    console.log(`adding report ${newReport.code}`);
    await reportStore.addReport(station._id, newReport);
    response.redirect("/station/" + station._id);
  },

  async addRepApi(request, response){
    const station = await stationStore.getStationById(request.params.id);
    response.redirect("/station/" + station._id + "/generate"); 
  }
}