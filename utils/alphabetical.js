export const Alphabetical = { 
    sortStation(station) {      
             return station.sort((a,b) => a['title'].localeCompare(b['title']));
    },

    sortStationTime(station) {
        const reports = station.reports; 
        reports.sort((a,b) => {
        const dateA = new Date (a.date);
        const dateB = new Date (b.date);  
        if (dateA < dateB ) return 1; 
        else if(dateA > dateB) return -1; 
        return 0; 
      }) 
      if(reports.length > 0){
      return reports; 
      }
      else {
        return null; 
      }
     }, 

     NotEmptyList(reportsByTime){
      if(reportsByTime != null){
        return reportsByTime[0].code; 
      }
      else {
        return null; 
      }
     }


}

/*
Sorting Learnt from: 
https://www.youtube.com/watch?v=CTHhlx25X-U 

Custom Sorting learnt from: 
https://www.youtube.com/watch?v=bZ-s5Q5KVn4
https://egghead.io/lessons/javascript-use-a-custom-sort-function-on-an-array-in-javascript

*/

