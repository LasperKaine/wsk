function sortArray(numbers) {
  return [...numbers].sort((a, b) => a - b);
}

const nums = [5, 2, 8, 1, 9];

console.log("Original:", nums);
console.log("Sorted:", sortArray(nums));
