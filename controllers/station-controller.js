import { stationStore } from "../models/station-store.js";
import {reportStore} from "../models/report-store.js"
import { Analysis} from "../utils/analysis.js";
import { Alphabetical} from "../utils/alphabetical.js"; 
import axios from "axios";
const apiKey = "4111bc62708478a8a0233bf6fe177a24";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const reportsByTime = Alphabetical.sortStationTime(station); 
    let latestWeatherCode = Alphabetical.NotEmptyList(reportsByTime); 
    let icon = Analysis.getIconFunction(latestWeatherCode); 
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
     icon: icon, 
    
    };
     
    response.render("station-view", viewData);
  }, 

  
  async generateReportCurrent(request,response, next) {
    const station = await stationStore.getStationById(request.params.id);
    const date = new Date().toISOString();
    let report = {};
    const lat = request.body.lat; 
    const lng = request.body.lng;
    const latLongRequestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;
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
    response.render("generate-view", viewData); response.redirect("/");  
  }, 

   
   async generateReport(request,response) {
    console.log("rendering new report");
    let report = {};
    const lat = request.body.lat || "52.2502793";
    const lng = request.body.lng || "-7.1177689";
    const latLongRequestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;
    const result = await axios.get(latLongRequestUrl);
    if (result.status == 200) {
      report.tempTrend = [];
      report.trendLabels = [];
      const trends = result.data.list;
      for (let i=0; i<10; i++) {
        report.tempTrend.push(trends[i].main.temp);
        report.trendLabels.push(trends[i].dt_txt);
      }
    }
    
    const viewData = {
      title: "Weather Report",
      reading: report,
    };
    response.render("generate-view", viewData); /* Make another call here to this.generateReportCurrent? */ 
  },  

  async deleteReport(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Deleting Report ${reportId} from Dashboard ${stationId}`);
    await reportStore.deleteReport(request.params.reportId);
    response.redirect("/station/" + stationId);
  },
 
};