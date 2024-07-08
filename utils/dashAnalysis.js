
export const dashAnalysis = {

    getStations(station ){      
    let stationIds; 
       stationIds = station.map(
            function (s) {
               /* console.log(s["title"] + ":  " +  s["_id"]); */ 
              return s["_id"]; 
            }, 
        ); 
  
        return stationIds; 
        
    },

    /* Issue, only working for 1 station, why */
    getCurrentTime(reports){

     let currentT = null; 
     if(reports.length > 0){
      currentT = reports[0]["date"];
      for (let i = 1; i < reports.length; i++) {
        if (reports[i]["date"] > currentT) {
          currentT = reports[i]["date"]; 
        }
      }
     }
    return currentT; 

    }, 
       

    }




