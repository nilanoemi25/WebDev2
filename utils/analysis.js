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

  getIconFunction(latestWeatherCode){

    if(latestWeatherCode >= 200 && latestWeatherCode <= 232){
      return "11d"; 
    }
    else if(latestWeatherCode >= 300 && latestWeatherCode <= 321){
      return "09d"
    } 
    else if(latestWeatherCode >=  500 && latestWeatherCode <= 504){
      return "10d"
    }
    else if(latestWeatherCode >=  511 && latestWeatherCode <= 531){
      return "09d"
    }
    else if(latestWeatherCode >=  600 && latestWeatherCode <= 622){
      return "13d"
    }
    else if(latestWeatherCode >=  701 && latestWeatherCode <= 781){
      return "50d"
    }
    else if(latestWeatherCode >=  800 && latestWeatherCode <= 801){
      return "01d"
    }
    else if(latestWeatherCode >=  802){
      return "03d"
    }
    else if(latestWeatherCode >=  803 && latestWeatherCode <= 804){
      return "01d"
    }
    else{
      return "01n"
    }
      
  } 

    
  };
