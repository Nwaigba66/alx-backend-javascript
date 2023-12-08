export default function cleanSet(set, startString) {
  if (!startString) return '';
  const matchedArray = Array.from(set).filter((item) => item.startsWith(startString));
  return matchedArray.map((item) => item.replace(startString, '')).join('-');
}
