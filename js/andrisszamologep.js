var firstNumber = '';

var secondNumber = '';

var operationSelector = '';

var addFirstNumberInput;

var addSecondNumberInput;

var floatFirstNumber;

var floatSecondNumber;

var resultNumber;

var resultNumberString = '';



function activeInputFirstNumber() {

  addFirstNumberInput = true;

  addSecondNumberInput = false;

  document.getElementById('addFirstNumber').style.background = 'yellow';

}

function activeInputSecondNumber() {

  addFirstNumberInput = false;

  addSecondNumberInput = true;

  document.getElementById('addSecondNumber').style.background = 'yellow';

}

function activeInputOperation() {

  document.getElementById('operationSelector').style.background = 'yellow';

}

function calculateOne() {

  if (addFirstNumberInput === true && addSecondNumberInput === false) {

    firstNumber += '1';

    console.log(firstNumber);

    document.getElementById('addFirstNumberLabel').innerHTML = firstNumber;

    // document.getElementById('addFirstNumber').innerHTML = 'firstNumber';

  } else if (addSecondNumberInput === true && addFirstNumberInput === false) {

    secondNumber += '1';

    console.log(secondNumber);

    document.getElementById('addSecondNumberLabel').innerHTML = secondNumber;

  }

}

function calculateTwo() {

  if (addFirstNumberInput === true && addSecondNumberInput === false) {

    firstNumber += '2';

    console.log(firstNumber);

    document.getElementById('addFirstNumberLabel').innerHTML = firstNumber;

  } else if (addSecondNumberInput === true && addFirstNumberInput === false) {

    secondNumber += '2';

    console.log(secondNumber);

    document.getElementById('addSecondNumberLabel').innerHTML = secondNumber;

  }

}

function calculateThree() {

  if (addFirstNumberInput === true && addSecondNumberInput === false) {

    firstNumber += '3';

    console.log(firstNumber);

    document.getElementById('addFirstNumberLabel').innerHTML = firstNumber;

  } else if (addSecondNumberInput === true && addFirstNumberInput === false) {

    secondNumber += '3';

    console.log(secondNumber);

    document.getElementById('addSecondNumberLabel').innerHTML = secondNumber;

  }

}

function calculateFour() {

  if (addFirstNumberInput === true && addSecondNumberInput === false) {

    firstNumber += '4';

    console.log(firstNumber);

    document.getElementById('addFirstNumberLabel').innerHTML = firstNumber;

  } else if (addSecondNumberInput === true && addFirstNumberInput === false) {

    secondNumber += '4';

    console.log(secondNumber);

    document.getElementById('addSecondNumberLabel').innerHTML = secondNumber;

  }

}

function calculateFive() {

  if (addFirstNumberInput === true && addSecondNumberInput === false) {

    firstNumber += '5';

    console.log(firstNumber);

    document.getElementById('addFirstNumberLabel').innerHTML = firstNumber;

  } else if (addSecondNumberInput === true && addFirstNumberInput === false) {

    secondNumber += '5';

    console.log(secondNumber);

    document.getElementById('addSecondNumberLabel').innerHTML = secondNumber;

  }

}

function calculateSix() {

  if (addFirstNumberInput === true && addSecondNumberInput === false) {

    firstNumber += '6';

    console.log(firstNumber);

    document.getElementById('addFirstNumberLabel').innerHTML = firstNumber;

  } else if (addSecondNumberInput === true && addFirstNumberInput === false) {

    secondNumber += '6';

    console.log(secondNumber);

    document.getElementById('addSecondNumberLabel').innerHTML = secondNumber;

  }

}

function calculateSeven() {

  if (addFirstNumberInput === true && addSecondNumberInput === false) {

    firstNumber += '7';

    console.log(firstNumber);

    document.getElementById('addFirstNumberLabel').innerHTML = firstNumber;

  } else if (addSecondNumberInput === true && addFirstNumberInput === false) {

    secondNumber += '7';

    console.log(secondNumber);

    document.getElementById('addSecondNumberLabel').innerHTML = secondNumber;

  }

}

function calculateEight() {

  if (addFirstNumberInput === true && addSecondNumberInput === false) {

    firstNumber += '8';

    console.log(firstNumber);

    document.getElementById('addFirstNumberLabel').innerHTML = firstNumber;

  } else if (addSecondNumberInput === true && addFirstNumberInput === false) {

    secondNumber += '8';

    console.log(secondNumber);

    document.getElementById('addSecondNumberLabel').innerHTML = secondNumber;

  }

}

function calculateNine() {

  if (addFirstNumberInput === true && addSecondNumberInput === false) {

    firstNumber += '9';

    console.log(firstNumber);

    document.getElementById('addFirstNumberLabel').innerHTML = firstNumber;

  } else if (addSecondNumberInput === true && addFirstNumberInput === false) {

    secondNumber += '9';

    console.log(secondNumber);

    document.getElementById('addSecondNumberLabel').innerHTML = secondNumber;

  }

}

function calculateZero() {

  // firstNumber = parseFloat(document.getElementById('addFirstNumber').value);

  if (addFirstNumberInput === true && addSecondNumberInput === false) {

    firstNumber += '';

    console.log(firstNumber);

    document.getElementById('addFirstNumberLabel').innerHTML = firstNumber;

  } else if (addSecondNumberInput === true && addFirstNumberInput === false) {

    secondNumber += '0';

    console.log(secondNumber);

    document.getElementById('addSecondNumberLabel').innerHTML = secondNumber;

  }

}

function calculatePoint() {

  if (addFirstNumberInput === true && addSecondNumberInput === false) {

    firstNumber += '.';

    console.log(firstNumber);

    document.getElementById('addFirstNumberLabel').innerHTML = firstNumber;

  } else if (addSecondNumberInput === true && addFirstNumberInput === false) {

    secondNumber += '.';

    console.log(secondNumber);

    document.getElementById('addSecondNumberLabel').innerHTML = secondNumber;

  }

}

function operationAdd() {

  operationSelector = '+';

  document.getElementById('showOperation').innerHTML = operationSelector;

}

function operationMinus() {

  operationSelector = '-';

  document.getElementById('showOperation').innerHTML = operationSelector;

}

function operationMultiply() {

  operationSelector = '*';

  document.getElementById('showOperation').innerHTML = operationSelector;

}

function operationDivide() {

  operationSelector = '/';

  document.getElementById('showOperation').innerHTML = operationSelector;

}

function operartionExponent() {

  operationSelector = '^';

  document.getElementById('showOperation').innerHTML = operationSelector;

}

function operationModulo() {

  operationSelector = '%';

  document.getElementById('showOperation').innerHTML = operationSelector;

}

function parseFloatFirstNumber() {

  console.log(firstNumber);

  floatFirstNumber = parseFloat(firstnumber);

  console.log(floatFirstNumber);

  console.log(parseFloat(document.querySelector('#addFirstNumberLabel').value));

  // addFirstNumber;

}

function parseFloatSecondNumber() {

  floatSecondNumber = parseFloat(document.querySelector('#addSecondNumberLabel').value);

  // addSecondNumber;

}

function showResultNumber() {

  floatFirstNumber = parseFloat(firstNumber);

  floatSecondNumber = parseFloat(secondNumber);

  console.log(floatFirstNumber);

  console.log(floatSecondNumber);

  if (operationSelector === '+') {

    resultNumber = floatFirstNumber + floatSecondNumber;

  } else if (operationSelector === '-') {

    resultNumber = floatFirstNumber - floatSecondNumber;

  } else if (operationSelector === '*') {

    resultNumber = floatFirstNumber * floatSecondNumber;

  } else if (operationSelector === '/') {

    resultNumber = floatFirstNumber / floatSecondNumber;

  } else if (operationSelector === '^') {

    resultNumber = floatFirstNumber ** floatSecondNumber;

  } else if (operationSelector === '%') {

    resultNumber = floatFirstNumber % floatSecondNumber;

  }

  console.log(resultNumber);

  resultNumberString = resultNumber.toString();

  document.querySelector('#resultSelectorLabel').innerHTML = resultNumberString;

}