//document.onload = startApp();

function startApp() {

    window.addEventListener('devicelight', function (event) {
        //alert("got event");
        document.querySelector("#brightness").innerHTML = "Current ambient brightness: " + event.value;
        
        if(event.value < 200) {
            alert("Toggling Dark");
            toogleDark();
        } else {
            toogleBright();
        }

    })
    
}

function toogleDark() {

    $('html').css("background-color", "black");
    $('body').css("background-color", "black");
    $('html').css("color", "white");
    $('body').css("color", "white");

}

function toogleBright() {

    $('html').css("background-color", "white");
    $('body').css("background-color", "white");
    $('html').css("color", "black");
    $('body').css("color", "black");

}