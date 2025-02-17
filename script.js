let startButton = document.getElementById('start-button');
let userInput = document.getElementById('user-input');
let textToType = document.getElementById('text-to-type');
let timeDisplay = document.getElementById('time');
let wpmDisplay = document.getElementById('wpm');
let timer;
let startTime;
let correctWords = 0;

startButton.addEventListener('click', startTest);

function startTest() {
  // Reset values
  userInput.disabled = false;
  userInput.value = '';
  textToType.style.color = 'black';
  userInput.style.backgroundColor = '#fff';
  correctWords = 0;
  wpmDisplay.innerText = '0';
  timeDisplay.innerText = '0';
  
  startButton.disabled = true;
  startButton.innerText = 'Test Started';
  
  // Start time
  startTime = Date.now();
  timer = setInterval(updateTime, 1000);

  // Disable textarea once typing is done
  userInput.addEventListener('input', checkInput);
}

function updateTime() {
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
  timeDisplay.innerText = elapsedTime;
  calculateWPM(elapsedTime);
}

function checkInput() {
  let userText = userInput.value;
  let targetText = textToType.innerText;

  // Check if the text matches up to the current input length
  let correctText = targetText.slice(0, userText.length);
  if (userText === correctText) {
    textToType.style.color = 'green';
  } else {
    textToType.style.color = 'black';
  }

  // Check if the entire text is typed correctly
  if (userText === targetText) {
    clearInterval(timer);
    userInput.disabled = true;
    startButton.disabled = false;
    startButton.innerText = 'Test Completed';
  }
}

function calculateWPM(elapsedTime) {
  let wordsTyped = userInput.value.trim().split(/\s+/).length;
  if (elapsedTime > 0) {
    let wpm = Math.floor((wordsTyped / elapsedTime) * 60);
    wpmDisplay.innerText = wpm;
  }
}
