console.log('🌴')

// Get Audio
let sound = new Audio('audio/drum.wav');
let song = new Audio('audio/peachykeen.wav');

let soundBtn = document.querySelector('#sound');
soundBtn.addEventListener("click", () => sound.play());

// Select button
let songBtn = document.querySelector('#song');
// Add click event listener
songBtn.addEventListener("click", play);

// Play Song Event Listener
function play() {
    // Play the song
    song.play();

    songBtn.removeEventListener("click", play);
    songBtn.addEventListener("click", toggle);
    songBtn.innerHTML="Pause Song"
}
// Toggle Pause
function toggle() {
    if (song.paused) {
        song.play();
        songBtn.innerHTML = "Pause Song"
    }
    else {
        song.pause();
        songBtn.innerHTML = "Play Song"
    }
}