// CALCULATOR functionality

const display = document.getElementById("display");

// Displays the input in the screen
function appendToDisplay(input) {
  display.value += input;
}

// Destorys text in the display
function clearDisplay() {
  display.value = "";
}

// Calculated values entered in the display
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
