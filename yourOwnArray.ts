// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”






// - Your Own Array of favorite transport to print, I would like to own a mercedes-benz G-wagon.

let favoriteTransportation:Array<[Trasportation:string,brand:string]>=[]

favoriteTransportation.push(["Motorcycle", "HeavyBike"])


favoriteTransportation.push(["Car","Murcedes-benz"])


favoriteTransportation.push(["cycle","susuki"]);



// console.log(favoriteTransportation);

//Using to foreachLOop 

favoriteTransportation.forEach(([transport,brand]) => {
    console.log(`I would like to own a ! ${brand} ${transport}..`);
    
    
});



