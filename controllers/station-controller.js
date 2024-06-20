import { stationStore } from "../models/station-store.js";

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
 
};