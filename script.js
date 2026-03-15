function renderMovies(list, containerId) {

const container = document.getElementById(containerId);

container.innerHTML = "";

list.forEach(movie => {

const card = document.createElement("div");

card.classList.add("movie-card");

card.innerHTML = `
<img src="${movie.poster}">

<div class="movie-info">

<h3>${movie.title}</h3>

<p>${movie.genre} • ${movie.year}</p>

<span class="rating-badge">${movie.rating}</span>

</div> 
`;
card.innerHTML = `
<a href="movie.html?title=${encodeURIComponent(movie.title)}">

<img src="${movie.poster}">

</a>

<div class="movie-info">

<h3>${movie.title}</h3>

<p>${movie.genre} • ${movie.year}</p>

<span class="rating-badge">${movie.rating}</span>

</div>
`
container.appendChild(card);

});

}

renderMovies(movieDatabase.trending, "trending");
renderMovies(movieDatabase.topRated, "topRated");
renderMovies(movieDatabase.newReleases, "newReleases");
function filterGenre(genre){

if(genre === "all"){
renderMovies(movieDatabase.trending,"trending")
return
}

const filtered = movieDatabase.trending.filter(movie =>
movie.genre.includes(genre)
)

renderMovies(filtered,"trending")

}
