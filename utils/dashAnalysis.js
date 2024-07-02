
export const dashAnalysis = {

    /* If the report ID matches one of the reports in the array of reports belonging to the station then get the average
     First get all reports in to an array then get average 
    */

    /* Station ID is present in Dashboard controller, call by: console.log(station[0]["_id"]);  */

    getStations(station ){      
    let stationIds; 
       stationIds = station.map(
            function (s) {
               /* console.log(s["title"] + ":  " +  s["_id"]); */ 
              return s["_id"]; 
            }, 
        ); 
  
        return stationIds; 
        /*
        for( let i = 0; i < stationIds.length; i++){
            if(reports[i]["stationid"] === stationIds["_id"]){
             console.log(reports[i]["stationid"]); 

            }
            else 
            console.log("not matched");  */ 
    
        /*I want to get all reports. If the reports match the station ID then add them to an array and then get the average of those and then view */
        
    },

      getAveragePressure(station) {
      let avePressure= null;
      if (station.reports.length > 0) {
        avePressure = station.reports[0];
        for (let i = 1; i < station.reports.length; i++) {
          if (station.reports[i].pressure < avePressure.pressure) {
            avePressure = station.reports[i];
          }
        }
      }
      return avePressure; 
    },
       

    }




