document.onload = startApp();

function startApp() {

    window.addEventListener('devicelight', function (event) {
        //alert("got event");
        document.querySelector("#brightness").innerHTML = "Current ambient brightness: " + event.value;

        if(event.value < 500) {
            toogleDark();
        } else {
            toogleBright();
        }

    })
    
}

function toogleDark() {

    $("body").css("background-color", "black");
    $("body").css("color", "white");

}

function toogleBright() {

    $("body").css("background-color", "white");
    $("body").css("color", "black");

}