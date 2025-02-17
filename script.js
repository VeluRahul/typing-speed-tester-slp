let testText = document.getElementById('test-text').innerText;
let inputText = document.getElementById('input-text');
let timerDisplay = document.getElementById('timer');
let wpmDisplay = document.getElementById('wpm');
let startButton = document.getElementById('start-button');
let startTime = 0;
let endTime = 0;
let interval;
let wordCount = 0;

function startTest() {
    inputText.disabled = false;
    inputText.value = '';
    inputText.focus();
    wordCount = 0;
    wpmDisplay.innerText = 'WPM: 0';
    startButton.disabled = true;

    startTime = Date.now();
    interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    timerDisplay.innerText = 'Time: ' + elapsedTime + 's';

    if (elapsedTime >= 60) {
        clearInterval(interval);
        inputText.disabled = true;
        calculateWPM();
    }
}

function checkText() {
    let userText = inputText.value;
    let wordsTyped = userText.trim().split(/\s+/).length;

    if (userText === testText) {
        inputText.disabled = true;
        endTime = Date.now();
        clearInterval(interval);
        calculateWPM();
    }
}

function calculateWPM() {
    let elapsedTime = (endTime - startTime) / 1000; // time in seconds
    let wordsTyped = inputText.value.trim().split(/\s+/).length;
    let wpm = Math.floor((wordsTyped / elapsedTime) * 60);
    wpmDisplay.innerText = 'WPM: ' + wpm;
    startButton.disabled = false;
}
