document.onload = startApp();

var THEME_BRIGHT = 0;
var THEME_DARK = 1;

var toggleThreshold = 150;

//var lastTime  = 0;
var supported = false;
var currentTheme = THEME_BRIGHT;
var toggleByShake = false;

// Listeners
var myShakeEvent;

function startApp() {

    window.addEventListener('devicelight', function (event) {
        supported = true;
        document.querySelector("#brightness").innerHTML = "Current ambient brightness: " + event.value;
        brightness = event.value;

        if(!toggleByShake) {
            if(brightness < toggleThreshold && currentTheme == THEME_BRIGHT) {
                toggleDark();
            } else if (brightness >= toggleThreshold && currentTheme == THEME_DARK) {
                toggleBright();
            } else {
            }
        }


    });

    setTimeout(function () {
        if(!supported) {
            alert("Your browser doesnt support ambient light!");
        }
    }, 1000);
    
}

function toggleShake() {
    toggleByShake = !toggleByShake;
    if(toggleByShake) {
        listenForShake();
    } else {
        window.removeEventListener('shake', shakeEventDidOccur, false);
        myShakeEvent.stop();
    }
    //console.log(toggleByShake);
}

function listenForShake() {
    myShakeEvent = new Shake({
        threshold: 15
    });
    myShakeEvent.start();
    window.addEventListener('shake', shakeEventDidOccur, false);
}

function shakeEventDidOccur () {
    if(toggleByShake) {
        if(currentTheme == THEME_BRIGHT) {
            toggleDark();
        } else {
            toggleBright();
        }
    }
}

function toggleDark() {
    var body = $('body');
    var html = $('html');

    html.css("background-color", "black");
    body.css("background-color", "black");
    html.css("color", "white");
    body.css("color", "white");
    currentTheme = THEME_DARK;
}

function toggleBright() {
    var body = $('body');
    var html = $('html');

    html.css("background-color", "white");
    body.css("background-color", "white");
    html.css("color", "black");
    body.css("color", "black");
    currentTheme = THEME_BRIGHT;
}