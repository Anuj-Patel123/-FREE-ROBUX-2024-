const audio = new Audio('Recording.wav');


function sound() {
    audio.play();
    setTimeout(() => {
    window.location.assign("Task.html");
}, 2200);
}
