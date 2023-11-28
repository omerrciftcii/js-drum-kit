


function myFunction(id) {
    var element;
    var audio;
    switch (id) {
        case "#65":
            element = document.getElementById(id);
            audio = new Audio('sounds/clap.wav');
            break;
        case "#83":
            element = document.getElementById(id);
            audio = new Audio('sounds/hihat.wav');
            break;
            case "#68":
            element = document.getElementById(id);
            audio = new Audio('sounds/kick.wav');
            break;
        case "#70":
            element = document.getElementById(id);
            audio = new Audio('sounds/openhat.wav');
            break;
            case "#71":
            element = document.getElementById(id);
            audio = new Audio('sounds/boom.wav');
            break;
        case "#72":
            element = document.getElementById(id);
            audio = new Audio('sounds/ride.wav');
            break;
            case "#74":
            element = document.getElementById(id);
            audio = new Audio('sounds/snare.wav');
            break;
        case "#75":
            element = document.getElementById(id);
            audio = new Audio('sounds/tom.wav');
            break;
            case "#76":
            element = document.getElementById(id);
            audio = new Audio('sounds/tink.wav');
            break;
     
        default:
            break;
    }

    if (element.classList.contains("playing")) {
        element.classList.remove("playing")
        audio.stop();

    } else {
        element.classList.add("playing");
        audio.play().then(() => {
            element.classList.remove("playing");

        });

    }

}