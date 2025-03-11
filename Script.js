let timer;
let seconds = 0, minutes = 0, hours = 0;
let running = false;

function updateChrono() {
    let display = 
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
    
    document.getElementById("chronometre").innerText = display;
}

function startChrono() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) { seconds = 0; minutes++; }
            if (minutes === 60) { minutes = 0; hours++; }
            updateChrono();
        }, 1000);
    }
}

function pauseChrono() {
    running = false;
    clearInterval(timer);
}

function resetChrono() {
    running = false;
    clearInterval(timer);
    seconds = 0; minutes = 0; hours = 0;
    updateChrono();
}
