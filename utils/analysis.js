export const Analysis = {
    getMinPressure(station) {
      let minPressure= null;
      if (station.reports.length > 0) {
        minPressure = station.reports[0];
        for (let i = 1; i < station.reports.length; i++) {
          if (station.reports[i].pressure < minPressure.pressure) {
            minPressure = station.reports[i];
          }
        }
      }
      return minPressure.pressure; 
    },
    getMaxPressure(station) {
        let maxPressure= null;
        if (station.reports.length > 0) {
          maxPressure = station.reports[0];
          for (let i = 1; i < station.reports.length; i++) {
            if (station.reports[i].pressure > maxPressure.pressure) {
              maxPressure = station.reports[i];
            }
          }
        } /* Remove key value */
        return maxPressure.pressure; 
      },
    getMinWind(station) { 
    let minWind= null;
    if (station.reports.length > 0) {
      minWind = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if (station.reports[i].windspeed < minWind.windspeed) {
          minWind= station.reports[i];
        }
      }
    }
    return minWind; 
  },
  getMaxWind(station) {
    let maxWind= null;
    if (station.reports.length > 0) {
      maxWind = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if (station.reports[i].windspeed > maxWind.windspeed) {
          maxWind = station.reports[i];
        }
      }
    }
    return maxWind; 
  },

  getMinTemp(station) { 
    let minTemp= null;
    if (station.reports.length > 0) {
      minTemp = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if (station.reports[i].temperature < minTemp.temperature) {
          minTemp= station.reports[i];
        }
      }
    }
    return minTemp; 
  },

  /* To self: We are better off doing the filter logic and rearranging all reports inside the station to SHOW per date. 
  getMaxTime(station) { 
    let maxTime= null;
    if (station.reports.length > 0) {
      maxTime = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if (station.reports[i].date < maxTime.date) {
          maxTime= station.reports[i];
        }
      }
    }
    return maxTime.date; 
  }, */ 


  getMaxTemp(station) {
    let maxTemp= null;
    if (station.reports.length > 0) {
      maxTemp = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if (station.reports[i].temperature > maxTemp.temperature) {
          maxTemp = station.reports[i];
        }
      }
    }
     return maxTemp; 
  },

    
  };
