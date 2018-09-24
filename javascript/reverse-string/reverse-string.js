export default function (reversable) {
  const thisReversable = String(reversable) || '';
  return thisReversable.split('').reverse().join('');
}
