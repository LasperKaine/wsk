let movies = [];

let count = Number(prompt("How many movies do you want to rate?"));

for (let i = 1; i <= count; i++) {
  let title = prompt(`Enter title for movie ${i}:`);
  let rating = Number(prompt(`Enter rating (1-5) for ${title}:`));

  let movie = {
    title: title,
    rating: rating,
  };

  movies.push(movie);
}

movies.sort((a, b) => b.rating - a.rating);

let bestMovie = movies[0];

let output = "<h1>Movies (Sorted by Rating)</h1><ul>";

for (let movie of movies) {
  output += `<li>${movie.title} - Rating: ${movie.rating}</li>`;
}

output += "</ul>";

output += `<h2>Best Movie: ${bestMovie.title} (${bestMovie.rating})</h2>`;

document.body.innerHTML = output;
