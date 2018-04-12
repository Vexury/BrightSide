document.onload = startApp();

function startApp() {

    window.addEventListener('devicelight', function (event) {
        //alert("got event");
        document.querySelector("#brightness").innerHTML = "Current ambient brightness: " + event.value;
    })
    
}