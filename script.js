card.innerHTML = `
<img src="${movie.poster}">

<div class="movie-info">

<h3>${movie.title}</h3>

<p>${movie.genre} • ${movie.year}</p>

<span class="rating-badge">${movie.rating || "N/A"}</span>

<div class="stars">
${createStars(index)}
</div>

</div>
`;
