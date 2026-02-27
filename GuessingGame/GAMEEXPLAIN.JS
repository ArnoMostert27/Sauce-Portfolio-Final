// This ensures the JavaScript runs only after the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Here I generate a random number between 1 and 20
    // Math.random gives a number between 0 and 1
    // Multiply by 20 to get 0 to 19.999
    // Math.floor removes decimals
    // Add 1 to shift range to 1–20
    var secret = Math.floor(Math.random() * 20) + 1;

    // These lines select elements from my HTML using their IDs
    var guessInput = document.getElementById("guessInput");
    var guessBtn = document.getElementById("guessBtn");
    var message = document.getElementById("message");

    // This adds a click event to the Guess button
    guessBtn.addEventListener("click", function () {

        // Convert user input from string to integer
        var guess = parseInt(guessInput.value);

        // Validate the input
        if (isNaN(guess) || guess < 1 || guess > 20) {
            message.textContent = "⚠ Please enter a number between 1 and 20!";
            message.style.color = "orange";
            return;
        }

        // Check if guess matches the secret number
        if (guess === secret) {
            message.textContent = "🎉 Correct Guess!";
            message.style.color = "green";
        }

        // If guess is too low
        else if (guess < secret) {
            message.textContent = "⬇ Incorrect, too low!";
            message.style.color = "red";
        }

        // If guess is too high
        else if (guess > secret) {
            message.textContent = "⬆ Incorrect, too high!";
            message.style.color = "red";
        }

    });

});
