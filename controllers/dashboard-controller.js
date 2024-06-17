import { locationStore } from "../models/station-store.js";

export const dashboardController = {
  async index(request, response) {
    const viewData = {
      title: "WeatherTop Dashboard",
      location: await locationStore.getAllLocations(),
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
    
  },
  
  async addLocation(request, response) {
    const newLocation = {
      title: request.body.title,
    };
    console.log(`adding location ${newLocation.title}`);
    await locationStore.addLocation(newLocation);
    response.redirect("/dashboard");
  },
  
};
