document.onload = startApp();

function startApp() {

    /*window.addEventListener('devicelight', function (event) {
        alert("got event");
        document.querySelector("#brightness").innerHTML = "Current ambient brightness: " + event.value;
        
    })*/

    if ( 'AmbientLightSensor' in window ) {

        var sensor = new AmbientLightSensor();
        sensor.onreading = function() {
            console.log('Current light level:', sensor.illuminance);
        };
        sensor.onerror = function(event) {
            console.log(event.error.name, event.error.message);
        };
        sensor.start();
    } else {
        alert("LOL");
    }
    
}