const { response } = require('express');
const { get } = require('http');
const fetch=require('node-fetch');
function getObjectFromUrl(url)
{
    return new Promise(resolve=>
    
        fetch(url)
        .then(response=>response.text())
        .then(text=>resolve(JSON.parse(text)))
    
    );
}

function getCountryBounds(country)
{
    return new Promise(resolve=>
    
        getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
        .then(object=>(
            {
             minLatitudine:object[0].boundingbox[0],
                maxLatitudine:object[0].boundingbox[1],
                minLongitudine:object[0].boundingbox[2],
                maxLongitudine:object[0].boundingbox[3]   
            } ) )
    
    );
}

function main()
{
    getCountryBounds('Romania')
    .then(bounds=>console.log(bounds));
}