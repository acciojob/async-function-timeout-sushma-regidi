//your JS code here. If required.
// Waits for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Get references to elements
  const textInput = document.getElementById("text");
  const delayInput = document.getElementById("delay");
  const btn = document.getElementById("btn");
  const output = document.getElementById("output");

  // Helper function to create a delay using a Promise
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Async function to handle button click
  async function showMessage() {
    const message = textInput.value;
    const delay = parseInt(delayInput.value, 10);

    // Clear previous output
    output.textContent = "";

    // Wait for the given delay
    await wait(delay);

    // Display message after delay
    output.textContent = message;
  }

  // Attach event listener to button
  btn.addEventListener("click", showMessage);
});
