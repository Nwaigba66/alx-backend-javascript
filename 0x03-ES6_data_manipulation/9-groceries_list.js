export default function groceriesList() {
  const groceries = {
    Apples: 10, Tomatoes: 10, Pasta: 1, Rice: 1, Banana: 5,
  };
  const map = new Map();
  for (const grocery of Object.keys(groceries)) {
    map.set(grocery, groceries[grocery]);
  }
  return map;
}
