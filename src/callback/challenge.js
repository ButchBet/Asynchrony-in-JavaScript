const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

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
            } else {
                const error = new Error(URL);
                
                return cb(error, null);
            }
        } 
    }

    xhttp.send();
}

fetchData(`${API}/products`, function(error1, response1) {  
    if(error1) return console.error(error1);

    fetchData(`${API}/products/${response1[0].id}`, function(error2, response2) {
        if(error2) return console.error(error2);

        fetchData(`${API}/categories/${response2.category?.id}`, function(error3, response3) {
            if(error3) return console.error(error3);

            console.log(response1[0]);
            console.log(response2.title);
            console.log(response3.name);
        });
    });
});
