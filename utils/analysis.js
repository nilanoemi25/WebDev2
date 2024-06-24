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
      return minPressure; 
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
        }
        return maxPressure; 
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
