let currentDisplay = '';
let decimalUsed = false;

function updateDisplay(value) {
  currentDisplay += value;
  document.getElementById('result').value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = '';
  document.getElementById('result').value = currentDisplay;
}

function backspace() {
    currentDisplay = currentDisplay.slice(0, -1);
    document.getElementById('result').value = currentDisplay;
    if (currentDisplay.includes('.')) {
      decimalUsed = true;
    } else {
      decimalUsed = false;
    }
  }

function calculate() {
  const result = eval(currentDisplay);
  currentDisplay = result.toString();
  document.getElementById('result').value = result;
}
