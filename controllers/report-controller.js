import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import axios from "axios";
const weatherRequestUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tramore,Ireland&units=metric&appid=4111bc62708478a8a0233bf6fe177a24`; 


export const ReportController = {
async addReport(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const date = new Date().toISOString();
    /*const newReport = {
      title: request.body.title,
      date: date, 
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windspeed: Number(request.body.windspeed),
      winddirection: request.body.winddirection, 
      pressure: Number(request.body.pressure),   
    }; */ /* UP TO RELEASE 3  */
    /* RELEASE 4  */
    let report = {};
    const result = await axios.get(weatherRequestUrl); 
    if (result.status == 200) {
      const currentWeather = result.data;
      report.code = currentWeather.weather[0].id;
      report.temperature = currentWeather.main.temp;
      report.windspeed = currentWeather.wind.speed;
      report.pressure = currentWeather.main.pressure;
      report.winddirection = currentWeather.wind.deg;
      report.date = date; 
    }
   
    console.log(report); 
    console.log(`adding report ${report.code}`);
    await reportStore.addReport(station._id, report);
    response.redirect("/station/" + station._id);
  },
}