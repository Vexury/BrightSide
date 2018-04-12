document.onload = startApp();

var THEME_BRIGHT = 0;
var THEME_DARK = 1;

//var lastTime  = 0;
var currentTheme = THEME_BRIGHT;

function startApp() {

    window.addEventListener('devicelight', function (event) {
        document.querySelector("#brightness").innerHTML = "Current ambient brightness: " + event.value;
        brightness = event.value;

        if(brightness < 200 && currentTheme == THEME_BRIGHT) {
            toogleDark();
        } else if (brightness >= 200 && currentTheme == THEME_DARK) {
            toogleBright();
        } else {

        }
        //lastTime = event.timestamp;

    });
    
}

function toogleDark() {
    $('html').css("background-color", "black");
    $('body').css("background-color", "black");
    $('html').css("color", "white");
    $('body').css("color", "white");
    currentTheme = THEME_DARK;
}

function toogleBright() {
    $('html').css("background-color", "white");
    $('body').css("background-color", "white");
    $('html').css("color", "black");
    $('body').css("color", "black");
    currentTheme = THEME_BRIGHT;
}