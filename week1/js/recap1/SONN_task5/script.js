let n = Number(prompt("Enter a positive integer:"));
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

document.body.innerHTML = `<h1>Sum: ${sum}</h1>`;
