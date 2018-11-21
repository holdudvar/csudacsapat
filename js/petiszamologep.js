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
  }
  document.querySelector('#result').innerHTML = eredmeny;
}
