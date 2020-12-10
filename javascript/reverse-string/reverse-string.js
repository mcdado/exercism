export default function reverseString (reversable) {
  const thisReversable = String(reversable) || '';
  return thisReversable.split('').reverse().join('');
}
