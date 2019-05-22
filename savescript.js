function saveMsDetails() {
    var msNameStr = document.getElementById("msname").value
    var msTypeStr = document.getElementById("mstype").value
    var msDescriptionStr = document.getElementById("msdescription").value
    var msTuxedoCalls = document.getElementById("mstuxedocalls").value
    var msTuxedoCallsArray = msTuxedoCalls.split(",")
    var msPaths = document.getElementById("mspaths").value
    var msPathsArray = msPaths.split(",")
    var msMethods = document.getElementById("mspaths").value
    var msMethodsArray = msMethods.split(",")


    var data = JSON.stringify({
        "name": msNameStr,
        "type": msTypeStr,
        "description": msDescriptionStr,
        "tuxedoCalls": msTuxedoCallsArray,
        "paths": msPathsArray,
        "methods": msMethodsArray
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "https://microservices-details.cfapps.io/microservice/details/save");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);


}



