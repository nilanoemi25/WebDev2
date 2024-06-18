import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";

const db = initStore("report");

export const reportStore = {
  async getAllReports() {
    await db.read();
    return db.data.reports;
  },

  async addReport(reportId, report) {
    await db.read();
    report._id = v4();
    report.reportid = reportId;
    db.data.report.push(report);
    await db.write();
    return report;
  },

  async getReportsByReportId(id) {
    await db.read();
    return db.data.reports.filter((report) => report.reportid === id);
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