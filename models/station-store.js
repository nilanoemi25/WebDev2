import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";

const db = initStore("locations");

export const locationStore = {
  async getAllLocations() {
    await db.read();
    return db.data.locations;
  },

  async addLocation(location) {
    await db.read();
    location._id = v4();
    db.data.locations.push(location);
    await db.write();
    return location;
  },

  async getLocationById(id) {
    await db.read();
    const list = db.data.locations.find((location) => location._id === id);
    return list;
  },

  async deleteLocationById(id) {
    await db.read();
    const index = db.data.locations.findIndex((location) => location._id === id);
    db.data.locations.splice(index, 1);
    await db.write();
  },

  async deleteAllLocation() {
    db.data.locations = [];
    await db.write();
  },
};