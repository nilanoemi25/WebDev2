import express from "express";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import {stationController} from "./controllers/station-controller.js";
import { ReportController } from "./controllers/report-controller.js";

export const router = express.Router();

router.get("/", dashboardController.index);
router.get("/dashboard", dashboardController.index);
router.get("/about", aboutController.index);
router.post("/dashboard/addlocation", dashboardController.addStation);
router.get("/station/:id", stationController.index);
router.post("/station/:id/addreport", ReportController.addReport);