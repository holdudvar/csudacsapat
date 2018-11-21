function zolicalculate() {
  var floatNumber1 = parseFloat(document.querySelector('#number1').value);
  var floatNumber2 = parseFloat(document.querySelector('#number2').value);
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
  }
  document.querySelector('#result').innerHTML = `<strong> ${result} .</strong>`;
}
