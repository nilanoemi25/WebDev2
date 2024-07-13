import { stationStore } from "../models/station-store.js";
import {reportStore} from "../models/report-store.js"
import { Analysis} from "../utils/analysis.js";
import { Alphabetical} from "../utils/alphabetical.js"; 
import { WeatherIcons } from "../utils/weatherIcons.js";
import axios from "axios";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const reportsByTime = Alphabetical.sortStationTime(station); 
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

  async generateReport(request,response) {
    const station = await stationStore.getStationById(request.params.id);
    const date = new Date().toISOString();
    let report = {};
    const lat = request.body.lat; 
    const lng = request.body.lng;
    const latLongRequestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=4111bc62708478a8a0233bf6fe177a24`;
    const result = await axios.get(latLongRequestUrl);
    console.log(latLongRequestUrl)
    if (result.status == 200) {
      const currentWeather = result.data;
      report.code = currentWeather.weather[0].id;
      report.temperature = currentWeather.main.temp;
      report.windspeed = currentWeather.wind.speed;
      report.pressure = currentWeather.main.pressure;
      report.winddirection = currentWeather.wind.deg;
      report.date = date; 
    } 

    const viewData = {
      title: "Weather Report API",
      date: report.date, 
      code: report.code,
      temperature: report.temperature, 
      windspeed: report.windspeed, 
      pressure: report.pressure, 
      winddirection: report. winddirection, 

    };
    await reportStore.addReport(station._id, report); 
    response.render("generate-view", viewData);
  },

  async deleteReport(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Deleting Report ${reportId} from Dashboard ${stationId}`);
    await reportStore.deleteReport(request.params.reportId);
    response.redirect("/station/" + stationId);
  },
 
};