export function validate (number) {
  // Avoid strange punctuation by casting to Number first.
  const input = Number(number);
  const digits = String(input).split('');
  return input === digits.reduce((out, digit) => {
    return out + Math.pow(digit, digits.length);
  }, 0);
};
