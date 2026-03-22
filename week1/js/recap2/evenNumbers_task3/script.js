let numbers = [];

while (true) {
  let input = prompt("Enter a number (or 'done' to finish):");

  if (input === "done") break;

  numbers.push(Number(input));
}

let evens = [];

for (let num of numbers) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}

if (evens.length > 0) {
  document.body.innerHTML = `<h1>Even Numbers: ${evens.join(", ")}</h1>`;
} else {
  document.body.innerHTML = `<h1>Even Numbers: None</h1>`;
}
