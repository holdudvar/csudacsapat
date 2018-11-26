/*
function insert(num) {
  var operatorValueEmpty = document.querySelector('operator').value === 'empty';
  if (operatorValueEmpty === true) {
    document.inputVar1.value += num;
  } else if (operatorValueEmpty === false) {
    document.inputVar2.value += num;
  }
}
/*
var fieldSelect;

var inputVar1 = document.querySelector('#input1');
inputVar1.addEventListener('focus', function () {
  fieldSelect = 'select1';
});

var inputVar2 = document.querySelector('#input2');
inputField2.addEventListener('focus', function () {
  fieldSelect = 'select2';
});
*/

function getNumber(num) {
  var inputVar1 = document.getElementById('input1');
  switch (num) {
  case 1:
    inputVar1.value += '1';
    break;
  case 2:
    inputVar1.value += '2';
    break;
  case 3:
    inputVar1.value += '3';
    break;
  case 4:
    inputVar1.value += '4';
    break;
  case 5:
    inputVar1.value += '5';
    break;
  case 6:
    inputVar1.value += '6';
    break;
  case 7:
    inputVar1.value += '7';
    break;
  case 8:
    inputVar1.value += '8';
    break;
  case 9:
    inputVar1.value += '9';
    break;
  }
}
/*
function getNumber(num) {
  var inputVar1 = document.getElementById('input1');
  switch (num) {
  case 1:
    inputVar2.value += '1';
    break;
  case 2:
    inputVar2.value += '2';
    break;
  case 3:
    inputVar2.value += '3';
    break;
  case 4:
    inputVar2.value += '4';
    break;
  case 5:
    inputVar2.value += '5';
    break;
  case 6:
    inputVar2.value += '6';
    break;
  case 7:
    inputVar2.value += '7';
    break;
  case 8:
    inputVar2.value += '8';
    break;
  case 9:
    inputVar2.value += '9';
    break;
  }
}
*/

function petiszamologep() {
  var ertek1 = parseFloat(document.querySelector('#value1').value, 10);
  var ertek2 = parseFloat(document.querySelector('#value2').value, 10);
  var muv = document.querySelector('#operator').value;
  var eredmeny;

  if (muv === 'add') {
    eredmeny = ertek1 + ertek2;
  } else if (muv === 'substract') {
    eredmeny = ertek1 - ertek2;
  } else if (muv === 'divide') {
    eredmeny = ertek1 * ertek2;
  } else if (muv === 'multiply') {
    eredmeny = ertek1 / ertek2;
  } else if (muv === 'percent') {
    eredmeny = (ertek1 / 100) * ertek2;
  } else if (muv === 'involve') {
    eredmeny = ertek1 ** ertek2;
  }

  document.querySelector('#result').innerHTML = eredmeny;
}
