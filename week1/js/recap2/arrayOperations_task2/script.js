let numbers = [];

for (let i = 1; i <= 5; i++) {
  let num = Number(prompt(`Enter Number ${i}:`));
  numbers.push(num);
}

console.log("Numbers:", numbers);

let search = Number(prompt("Enter a number to search:"));

if (numbers.includes(search)) {
  console.log(`Number ${search} is found in the array.`);
} else {
  console.log(`Number ${search} is NOT found.`);
}

numbers.pop();
console.log("Updated Numbers:", numbers);

numbers.sort((a, b) => a - b);

console.log("Sorted Numbers:", numbers);
