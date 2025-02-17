let startTime;
let endTime;

const textarea = document.getElementById('textarea');
const wpmDisplay = document.getElementById('wpm');
const submitButton = document.getElementById('submit-button');

textarea.addEventListener('focus', () => {
    // Start timer when user starts typing
    if (!startTime) {
        startTime = new Date();
    }
});

submitButton.addEventListener('click', () => {
    // Stop the timer when user finishes typing
    endTime = new Date();
    const timeElapsed = (endTime - startTime) / 1000;  // Time in seconds
    const text = textarea.value.trim();
    const wordCount = text.split(/\s+/).length;  // Count words
    const wpm = Math.floor((wordCount / timeElapsed) * 60);  // Calculate WPM
    wpmDisplay.textContent = `WPM: ${wpm}`;
    
    // Disable the textarea after submission
    textarea.disabled = true;
    submitButton.disabled = true;
});
