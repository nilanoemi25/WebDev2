export const Alphabetical = { 
    sortStation(station) {      
             return station.sort((a,b) => a['title'].localeCompare(b['title']));
    }
}

/*
Learnt from: 
https://www.youtube.com/watch?v=CTHhlx25X-U 

*/