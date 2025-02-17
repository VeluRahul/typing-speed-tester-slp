const sampleTexts = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing speed tests are fun and challenging.",
    "Improve your typing by practicing every day."
];

let startTime, endTime, selectedText;

function startTest() {
    selectedText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    document.getElementById("textToType").innerText = selectedText;
    document.getElementById("typingArea").value = "";
    document.getElementById("typingArea").disabled = false;
    document.getElementById("typingArea").focus();
    startTime = performance.now(); // Start the timer with performance.now() for better precision
}

function restartTest() {
    document.getElementById("typingArea").value = "";
    document.getElementById("textToType").innerText = "Click 'Start' to begin the test.";
    document.getElementById("result").innerText = "";
    document.getElementById("typingArea").disabled = true;
}

document.getElementById("typingArea").addEventListener("input", function () {

    let typedText = this.value.trim(); // Trim the typed text for accuracy
    let targetText = selectedText.trim(); // Trim the target text for accuracy

    // Check if the typed text matches the target text
    if (typedText === targetText) {
        endTime = performance.now(); // Use performance.now() to get an accurate end time
        let timeTaken = (endTime - startTime) / 1000 / 60; // Convert milliseconds to minutes

        // Calculate the number of words in the target text
        let words = targetText.split(/\s+/).length; // Split by spaces and count the words
        let wpm = Math.round(words / timeTaken); // Calculate WPM (words per minute)

        // If the time taken is too short (under 0.1 minutes), show a "Too fast!" message
        if (timeTaken < 0.1) {
            document.getElementById("result").innerText = `Too fast! Try again.`;
        } else {
            // Otherwise, display the typing speed in WPM
            document.getElementById("result").innerText = `You typed at ${wpm} words per minute!`;
        }

        document.getElementById("typingArea").disabled = true; // Disable typing area after completion
    }
});
