let n = Number(prompt("Enter a positive integer:"));

let table = "<table border='1'>";

for (let i = 1; i <= n; i++) {
  table += "<tr>";

  for (let j = 1; j <= n; j++) {
    table += `<td>${i * j}</td>`;
  }

  table += "</tr>";
}

table += "</table>";

document.body.innerHTML = `<h1>Multiplication Table</h1>${table}`;
