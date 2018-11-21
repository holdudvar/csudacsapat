function calculateAdd() {
  var floatFirstNumber = parseFloat(
    document.querySelector('#firstNumber').value
  );
  var floatSecondNumber = parseFloat(
    document.querySelector('#secondNumber').value
  );
  floatFirstNumber = floatFirstNumber * 1;
  floatSecondNumber = floatSecondNumber * 1;
  var result;
  result = floatFirstNumber + floatSecondNumber;
  document.querySelector('#result').innerHTML = `<strong> ${result} .</strong>`;
}

function calculateMinus() {
  var floatFirstNumber = parseFloat(
    document.querySelector('#firstNumber').value
  );
  var floatSecondNumber = parseFloat(
    document.querySelector('#secondNumber').value
  );
  floatFirstNumber = floatFirstNumber * 1;
  floatSecondNumber = floatSecondNumber * 1;
  var result;
  result = floatFirstNumber - floatSecondNumber;
  document.querySelector('#result').innerHTML = `<strong> ${result} .</strong>`;
}

function calculateMultiple() {
  var floatFirstNumber = parseFloat(
    document.querySelector('#firstNumber').value
  );
  var floatSecondNumber = parseFloat(
    document.querySelector('#secondNumber').value
  );
  floatFirstNumber = floatFirstNumber * 1;
  floatSecondNumber = floatSecondNumber * 1;
  var result;
  result = floatFirstNumber * floatSecondNumber;
  document.querySelector('#result').innerHTML = `<strong> ${result} .</strong>`;
}

function calculateDivide() {
  var floatFirstNumber = parseFloat(
    document.querySelector('#firstNumber').value
  );
  var floatSecondNumber = parseFloat(
    document.querySelector('#secondNumber').value
  );
  floatFirstNumber = floatFirstNumber * 1;
  floatSecondNumber = floatSecondNumber * 1;
  var result;
  result = floatFirstNumber / floatSecondNumber;
  document.querySelector('#result').innerHTML = `<strong> ${result} .</strong>`;
}
