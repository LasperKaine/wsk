let a = Number(prompt("Side a:"));
let b = Number(prompt("Side b:"));
let c = Number(prompt("Side c:"));

let result;

if (a === b && b === c) {
  result = "Equilateral";
} else if (a === b || b === c || a === c) {
  result = "Isosceles";
} else if (a !== b && b !== c && a !== c) {
  result = "Scalene";
} else {
  result = "Invalid";
}

document.body.innerHTML = `<h1>${result}</h1>`;
