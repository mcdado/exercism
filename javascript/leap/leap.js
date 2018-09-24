
export function isLeap (year) {
  const thisYear = Number(year) || 0;
  if (thisYear % 400 === 0) return true;
  if (thisYear % 100 === 0) return false;
  if (thisYear % 4 === 0) return true;
  return false;
}
