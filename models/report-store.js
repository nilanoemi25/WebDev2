import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";

const db = initStore("reports");

export const reportStore = {
  async getAllReports() {
    await db.read();
    return db.data.reports;
  },

  async addReport(stationId, report) {
    await db.read();
    report._id = v4();
    report.stationid = stationId;
    db.data.reports.push(report);
    await db.write();
    return report;
  },

  /* Not Working Correctly */ 
  async getReportsByStationId(id) {
    await db.read();
    return db.data.reports.filter((report) => report.stationid === id);
  },

  async getReportByCurrentTime(date){
    await db.read();
    return db.data.reports.filter((report) => report.date === date); 
  },


  async getReportById(id) {
    await db.read();
    return db.data.reports.find((report) => report._id === id);
  },

  async deleteReport(id) {
    await db.read();
    const index = db.data.reports.findIndex((report) => report._id === id);
    db.data.reports.splice(index, 1);
    await db.write();
  },

  async deleteAllReports() {
    db.data.reports = [];
    await db.write();
  },

  async updateReport(report, updatedReport) {
    report.title = updatedReport.title;
    report.code = updatedReport.code;
    report.temperature = updatedReport.temperature;
    report.windspeed = updatedReport.windspeed;
    report.winddirection = updatedReport.winddirection;
    report.pressure = updatedReport.pressure;
    await db.write();
  },
};