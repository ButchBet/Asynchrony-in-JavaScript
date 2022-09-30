const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1/productshttps://api.escuelajs.co/api/v1';

function fetchData(URL, cb /*Callback*/) {
    let xhttp = new XMLHttpRequest()

    xhttp.open('GET', URL, true);
    xhttp.onreadystatechange = function(event) {
        /*
            .readyState:
            0: initialized 
            1: loading
            2: loaded
            3: interacting (downloading or working) with the request
            4: completed
        */
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                cb(null, JSON.parse(xhttp.responseText));
            }
        } else {
            const error = new Error('Error' + URL);
            return cb(error, null);
        }
    }

    xhttp.send();
}

fetchData(API, function(error, response) {  
    if(response) { // If response is != null
        // Do something with the response
    } else { // The erro is != null
        // Do something with the error
    }
});
