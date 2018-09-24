export default function (number) {
  let value = Number(number);
  let units = 0;
  let fives = 0;
  let tens = 0;
  let fifties = 0;
  let hundreds = 0;
  let fiveHundreds = 0;
  let thousands = 0;
  let roman = '';

  thousands = Math.floor(value/1000);
  value = value % 1000;

  fiveHundreds = Math.floor(value/500);
  value = value % 500;

  hundreds = Math.floor(value/100);
  value = value % 100;

  fifties = Math.floor(value/50);
  value = value % 50;

  tens = Math.floor(value/10);
  value = value % 10;

  fives = Math.floor(value/5);
  value = value % 5;

  units = value;

  if (thousands) {
    roman += 'M'.repeat(thousands);
  }

  if (fiveHundreds && hundreds > 3) {
    roman += 'CM';
  } else if (fiveHundreds) {
    roman += 'D' + 'C'.repeat(hundreds)
  } else if (hundreds > 3) {
    roman += 'CD';
  } else {
    roman += 'C'.repeat(hundreds)
  }

  if (fifties && tens > 3) {
    roman += 'XC';
  } else if (fifties) {
    roman += 'L' + 'X'.repeat(tens);
  } else if (tens > 3) {
    roman += 'XL';
  } else {
    roman += 'X'.repeat(tens);
  }

  if (fives && units > 3) {
    roman += 'IX';
  } else if (fives) {
    roman += 'V' + 'I'.repeat(units);
  } else if (units > 3) {
    roman += 'IV';
  } else {
    roman += 'I'.repeat(units);
  }

  return roman;
};
