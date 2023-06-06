let currentNumber = '';
let currentOperator = '';
let previousNumber = '';

const resultElement = document.getElementById('result');

function clearResult() {
  resultElement.value = '';
  currentNumber = '';
  currentOperator = '';
  previousNumber = '';
}

function appendNumber(number) {
  currentNumber += number;
  resultElement.value = currentNumber;
}

function setOperator(operator) {
  currentOperator = operator;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  let result;
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);

  switch (currentOperator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      return;
  }

  resultElement.value = result;
}
 
function problem(){
  alert("USE KEYBOARD KEYS");
}

document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (/[0-9]/.test(key)) {
    appendNumber(parseInt(key));
  } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
    setOperator(key);
  } else if (key === 'Enter') {
    calculate();
  } else {
    alert('Invalid key!');
  }
});