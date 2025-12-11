const display = document.getElementById("display");
const buttons = document.querySelectorAll("button[data]");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");

let currentInput = "";

// Number/operator buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data");

    // Prevent adding equals button value here
    if (button.id !== "equals" && button.id !== "clear" && button.id !== "backspace") {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Equals button
equals.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput);
    display.value = currentInput;
  } catch {
    display.value = "Error";
    currentInput = "";
  }
});

// Clear button (reset all)
clear.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

// Backspace button (delete last character)
backspace.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
});
