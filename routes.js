import express from "express";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import {stationController} from "./controllers/station-controller.js";
import { ReportController } from "./controllers/report-controller.js";
import { accountsController } from './controllers/accounts-controller.js';

export const router = express.Router();

router.get("/", accountsController.index);
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);

router.get("/dashboard", dashboardController.index);
router.get("/about", aboutController.index);
router.post("/dashboard/addlocation", dashboardController.addStation);
router.get("/station/:id", stationController.index);
router.post("/station/:id/addreport", ReportController.addReport);
router.post("/station/:id/generate", stationController.generateReport); 
router.get("/dashboard/deletestation/:id", dashboardController.deleteStation);
router.get("/station/:stationid/deletereport/:reportid", stationController.deleteReport);

router.get("/edituser/:id", accountsController.edit);
router.post("/updateuser/:id", accountsController.update); 


