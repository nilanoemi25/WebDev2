import { locationStore } from "../models/station-store.js";


export const locationController = {
  async index(request, response) {
    const location = await locationStore.getLocationById(request.params.id);
    const viewData = {
      title: "Location ",
      location: location,
    };
    response.render("location-view", viewData);
  }, 

};