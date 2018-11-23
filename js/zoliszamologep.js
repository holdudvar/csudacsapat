var numberFieldSelectorLabel;
var inputField = document.querySelector('#number1');
inputField.addEventListener('focus', function () {
numberFieldSelectorLabel = 'select1';
})

var inputField = document.querySelector('#number2');
inputField.addEventListener('focus', function () {
numberFieldSelectorLabel = 'select2';
})

function oneFunct() {
  if (numberFieldSelectorLabel === 'select1') {
    document.querySelector('#number1').value = document.querySelector('#number1').value + '1';
  } else if (numberFieldSelectorLabel === 'select2') {
    document.querySelector('#number2').value = document.querySelector('#number2').value + '1';
  }
}

function twoFunct() {
  if (numberFieldSelectorLabel === 'select1') {
    document.querySelector('#number1').value = document.querySelector('#number1').value + '2';
  } else if (numberFieldSelectorLabel === 'select2') {
    document.querySelector('#number2').value = document.querySelector('#number2').value + '2';
  }
}

function threeFunct() {
  if (numberFieldSelectorLabel === 'select1') {
    document.querySelector('#number1').value = document.querySelector('#number1').value + '3';
  } else if (numberFieldSelectorLabel === 'select2') {
    document.querySelector('#number2').value = document.querySelector('#number2').value + '3';
  }
}

function fourFunct() {
  if (numberFieldSelectorLabel === 'select1') {
    document.querySelector('#number1').value = document.querySelector('#number1').value + '4';
  } else if (numberFieldSelectorLabel === 'select2') {
    document.querySelector('#number2').value = document.querySelector('#number2').value + '4';
  }
}

function fiveFunct() {
  if (numberFieldSelectorLabel === 'select1') {
    document.querySelector('#number1').value = document.querySelector('#number1').value + '5';
  } else if (numberFieldSelectorLabel === 'select2') {
    document.querySelector('#number2').value = document.querySelector('#number2').value + '5';
  }
}

function sixFunct() {
  if (numberFieldSelectorLabel === 'select1') {
    document.querySelector('#number1').value = document.querySelector('#number1').value + '6';
  } else if (numberFieldSelectorLabel === 'select2') {
    document.querySelector('#number2').value = document.querySelector('#number2').value + '6';
  }
}

function sevenFunct() {
  if (numberFieldSelectorLabel === 'select1') {
    document.querySelector('#number1').value = document.querySelector('#number1').value + '7';
  } else if (numberFieldSelectorLabel === 'select2') {
    document.querySelector('#number2').value = document.querySelector('#number2').value + '7';
  }
}

function eightFunct() {
  if (numberFieldSelectorLabel === 'select1') {
    document.querySelector('#number1').value = document.querySelector('#number1').value + '8';
  } else if (numberFieldSelectorLabel === 'select2') {
    document.querySelector('#number2').value = document.querySelector('#number2').value + '8';
  }
}

function nineFunct() {
  if (numberFieldSelectorLabel === 'select1') {
    document.querySelector('#number1').value = document.querySelector('#number1').value + '9';
  } else if (numberFieldSelectorLabel === 'select2') {
    document.querySelector('#number2').value = document.querySelector('#number2').value + '9';
  }
}

function zeroFunct() {
  if (numberFieldSelectorLabel === 'select1') {
    document.querySelector('#number1').value = document.querySelector('#number1').value + '0';
  } else if (numberFieldSelectorLabel === 'select2') {
    document.querySelector('#number2').value = document.querySelector('#number2').value + '0';
  }
}

function decimalSeparatorFunct() {
  if (numberFieldSelectorLabel === 'select1') {
    document.querySelector('#number1').value = document.querySelector('#number1').value + '.';
  } else if (numberFieldSelectorLabel === 'select2') {
    document.querySelector('#number2').value = document.querySelector('#number2').value + '.';
  }
}

var floatNumber1 = parseFloat(document.querySelector('#number1').value);
var floatNumber2 = parseFloat(document.querySelector('#number2').value);
function zolicalculate() {
  var arithmeticOperator = document.querySelector('.arithmeticOperator').value;
  var result;
  if (arithmeticOperator === 'add') {
    result = floatNumber1 + floatNumber2;
  } else if (arithmeticOperator === 'subtract') {
    result = floatNumber1 - floatNumber2;
  } else if (arithmeticOperator === 'multiple') {
    result = floatNumber1 * floatNumber2;
  } else if (arithmeticOperator === 'divide') {
    result = floatNumber1 / floatNumber2;
  } else if (arithmeticOperator === 'powerOf') {
    result = floatNumber1 ** floatNumber2;
  } else if (arithmeticOperator === 'modulo') {
    result = floatNumber1 % floatNumber2;
  }
  document.querySelector('#result').innerHTML = `<strong> ${result}</strong>`;
}
