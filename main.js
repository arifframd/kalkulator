//Calculator Program

const display = document.getElementById("display");
let error;
function appendToDisplay(input) {
  if (error == 1) {
    display.value = "";
    error = 0;
  }
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "error";
    error = 1;
  }
}
