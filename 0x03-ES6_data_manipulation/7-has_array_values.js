export default function hasValuesFromArray(set, array) {
  return array.reduce((prev, value) => +set.has(value) + prev, 0) === array.length;
}
