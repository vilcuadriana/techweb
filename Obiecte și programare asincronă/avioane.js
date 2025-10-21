const fetch = require('node-fetch');

function getObjectFromUrl(url) {
    return fetch(url)
        .then(response => response.json()); 
}
function getCountryBounds(country) {
    return getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
        .then(object => ({
            minLatitude: object[0].boundingbox[0],
            maxLatitude: object[0].boundingbox[1],
            minLongitude: object[0].boundingbox[2],
            maxLongitude: object[0].boundingbox[3]
        }));
}
function getPlanesOverCountry(country) {
    return getCountryBounds(country)
        .then(bounds => {
            const { minLatitude, maxLatitude, minLongitude, maxLongitude } = bounds;
            const url = `https://opensky-network.org/api/states/all?lamin=${minLatitude}&lomin=${minLongitude}&lamax=${maxLatitude}&lomax=${maxLongitude}`;
            return getObjectFromUrl(url);
        })
        .then(data => data.states); // `states` conține lista avioanelor
}
getPlanesOverCountry('Romania')
    .then(planes => {
        console.log(`Număr avioane deasupra României: ${planes ? planes.length : 0}`);
        console.log(planes); // lista detaliată
    })
    .catch(error => console.log("Eroare:", error.message));