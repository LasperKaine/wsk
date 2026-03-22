function sortArray(numbers, order) {
  let sorted = [...numbers];

  if (order === "asc") {
    sorted.sort((a, b) => a - b);
  } else if (order === "desc") {
    sorted.sort((a, b) => b - a);
  }

  return sorted;
}

const numbers = [5, 2, 8, 1, 9];

console.log(sortArray(numbers, "asc"));
console.log(sortArray(numbers, "desc"));
